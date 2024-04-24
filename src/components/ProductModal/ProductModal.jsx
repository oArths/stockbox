import * as S from "./style"
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";
import "./switch.css";


export default function ProductModal({isOpen, setOpenModal, title, placeholder}) {


  // function ToggleSwitch() {
  //   // Get the checkbox
  //   var checkBox = document.getElementById("switch");
  //   // Get the output text
  //   var input = document.getElementById("name").value;
  //   var textarea = document.getElementById("desc").value;
  
  //   if (checkBox.checked == true){
  //     input = "";
  //   } else {
  //     textarea = "";
  //   }
  // }
  let handleCloseModal = () => {
    setOpenModal(false);
  };
 
    return(
    <div>
        {isOpen && (<S.Overlay>
          <S.Modal>
        <S.ContainerHeader>
          <S.header>
          <S.TitleM>{title}</S.TitleM>
          <S.Close onClick={handleCloseModal}><S.IconClose/></S.Close>
          </S.header>
         </S.ContainerHeader>
      
          <S.ContainerM>
            <S.Div>
                <S.Form>
                <S.HeaderM>
                  <S.Text>Nome</S.Text>
                  <S.Switch>
                    <S.SwitchText>Adiconar em sequência</S.SwitchText>
                    <label class="switch">
                      <input type="checkbox" id="switch"/>
                      <span class="slider round"></span>
                    </label>
                  </S.Switch>
                  </S.HeaderM>
                  <S.NameInput autoComplete="off" required name='name' id="name" type="text"  placeholder={placeholder || "Nome"}/>
                  <S.Inputs autoComplete="off" required name='name' id="name" type="text"  placeholder={placeholder || "Nome"}/>
                  <S.Text>Descrição</S.Text>
                  <S.Textarea autoComplete="off" name='desc' id="desc" rows="5" maxlength="130" type="text" placeholder="Adicione uma descrição"/>
                </S.Form>
            </S.Div>
            <S.ConatinerButton>
            <ButtonConfirm Title="Adicionar" color="white"  width="150px" height="40px" backgroundColor="#38AD68" fontSize="15px"/>
            </S.ConatinerButton>

          </S.ContainerM>

        </S.Modal></S.Overlay>)}
        </div>
        

      
  
    )
}
