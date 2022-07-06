import Header from "./Header";
import Main from "./Main";

export default function Home(){
  return(
    <div className="container-body d-flex align-center justify-center">
      <Header />
      <Main />
    </div>
  )
}