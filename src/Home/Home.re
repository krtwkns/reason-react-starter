open Helpers
requireStyle("./style.scss");

[@react.component]
let make = () => {
    <main> {"Hello World  " |> React.string} </main>;
}
