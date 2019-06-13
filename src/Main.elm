module Main exposing (..)
import Browser
import Html exposing (..)
import Html.Attributes as A
import Html.Events as E

type Model = NoModel
type Msg =  NoOp
update: Msg -> Model -> (Model, Cmd Msg)
update msg model = (model, Cmd.none)


view: Model -> Html Msg
view model = text "Hello World!"

init: (Model ,Cmd Msg)
init = (NoModel, Cmd.none)

main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }
