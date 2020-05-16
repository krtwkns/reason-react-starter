open Helpers
requireStyle("./style.scss");

[@react.component]
let make = () => {
    <main> {"Hello Reason React" |> React.string} </main>;
}
