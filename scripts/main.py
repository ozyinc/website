import click
from openai import OpenAI
from openai.types.chat import *
from dotenv import load_dotenv
load_dotenv(".env")

client = OpenAI()
FRONTMATTER_SPLITTER = "---\n"

SUMMARIZE_PROMPT = """
You are an agent that generates a summary for the given markdown text.
The resulting summary will be used for a personal blog, focused on software engineering best practices.
The aim is to catch attention of the potential reader and hint all the highlights of the text.
Make sure to include some insight from each header of the article.
The text should not exceed 1200 characters.
Only include the summary in the response in plain text.
"""

PROVIDE_FEEDBACK_PROMPT = """
You are an agent that generates feedback for a give markdown text that is an article for a personal blog.
The language is informal, and the aim is to provide certain insights to the reader.
The article is written by an individual software developer, aiming to improve their writing skills alongside other means for the reader.
The article is to inform and explain, not to provide a tutorial of sorts or look too copy pastey.
Only include the article feedback in the response in plain text.
There is no need for pleasantries.
"""
@click.group()
def scripts():
    pass

def complete(article_path: str, system_prompt: str):
    with open(article_path, 'r', encoding='utf-8') as f:
        text = f.read()
    text = FRONTMATTER_SPLITTER.join(text.split(FRONTMATTER_SPLITTER)[2:])
    response = client.chat.completions.create(messages=[
        ChatCompletionSystemMessageParam(content=system_prompt, role="system", name="summary"),
        ChatCompletionUserMessageParam(content=text, role="user", name="summary")
    ], model="gpt-4o-mini-2024-07-18")
    print(response.choices[0].message.content)


@scripts.command("summarize")
@click.argument('input_file', type=click.Path(exists=True))
def generate_summary(input_file):
    complete(input_file, SUMMARIZE_PROMPT)

@scripts.command("feedback")
@click.argument('input_file', type=click.Path(exists=True))
def generate_feedback(input_file):
    complete(input_file, PROVIDE_FEEDBACK_PROMPT)


if __name__ == '__main__':
    scripts()
