import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)

-- MAIN
main =
  Browser.sandbox { init = init, update = update, view = view }

-- MODEL
type alias Model = { name : String, password : String, passwordAgain : String }
init : Model
init = { name = "", password = "", passwordAgain = "" }

-- UPDATE
type Msg = Name String | Password String | PasswordAgain String
update : Msg -> Model -> Model
update msg model =
  case msg of
    Name newName ->
      { model | name = newName }
    Password newPassword ->
      { model | password = newPassword }
    PasswordAgain newPassword ->
      { model | passwordAgain = newPassword }

-- VIEW
view : Model -> Html Msg
view model =
  div []
    [
      viewInput "text" "Name" model.name Name
      , viewInput "password" "Password" model.password Password
      , viewInput "password" "Re-enter Password" model.passwordAgain PasswordAgain
      , viewValidation model
    ]

viewInput : String -> String -> String -> (String -> Msg) -> Html Msg
viewInput t p v toMsg =
  input [ type_ t, placeholder p, value v, onInput toMsg ] []

viewValidation : Model -> Html Msg
viewValidation model =
  if model.password == model.passwordAgain then
    div [ style "color" "green" ] [ text "Good job" ]
  else
    div [ style "color" "red" ] [ text "Passwords don't match, idiot" ]
