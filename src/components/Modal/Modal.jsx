import * as S from "./style"
import React from 'react'
import { IconoirProvider, Xmark } from 'iconoir-react';
import "./switch.css";

export default function Modal({isOpen, setOpenModal, title}) {

  function ToggleSwitch() {
    // Get the checkbox
    var checkBox = document.getElementById("switch");
    // Get the output text
    var input = document.getElementById("name").value;
    var textarea = document.getElementById("desc").value;
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      input = "";
    } else {
      textarea = "";
    }
  }

  if (isOpen) {
    return(

      <S.Overlay>

        <S.Modal>

          {/* Close Modal*/}
          <IconoirProvider
            iconProps={{
              color: '#000',
              strokeWidth: 1.5,
              width: '2rem',
              height: '2rem',
            }}
          >
            {/* icon xmark */}
            <S.Close onClick={(setOpenModal)}><Xmark /></S.Close>
          </IconoirProvider>

          {/* Modal container*/}
          <S.ContainerM>
        
            {/* Header Modal */}
            <S.HeaderM>

              <S.TitleM>{title}</S.TitleM>
                
              <S.Switch>
                <S.SwitchText>Adiconar em sequência</S.SwitchText>

                {/* Toggle Switch */}
                <label class="switch">
                  <input type="checkbox" id="switch"/>
                  <span class="slider round"></span>
                </label>
              </S.Switch>

            </S.HeaderM>

            {/* Modal content */}
            <S.Div>

                <S.Form>
                  {/* Campo nome */}
                  <S.Text>Nome</S.Text>
                  
                  <S.Input required name='name' id="name" type="text"/>

                  {/* Campo Descrição */}
                  <S.Text>Descrição</S.Text>
                  
                  <S.Textarea name='desc' id="desc" rows="5" maxlength="130" type="text"/>
                </S.Form>


                <S.AddButton onClick={console.log('clicou')}>
                  Adicionar
                </S.AddButton>

            </S.Div>

          </S.ContainerM>

        </S.Modal>

      </S.Overlay>
  
    )
  }
  return null
}


//   const [infos, setInfos] = useState([]);
 
//     const [nameInfo, setNameInfo] = useState('');
//     const [descInfo, setDescInfo] = useState('');
 
 
//     // ADICIONAR
//     const addInfos= async () => {
//       if (nameInfo.trim() === '') {
//         console.log('Insira o nome.');
//         return;
//       }
//       if (descInfo.trim() === '') {
//         console.log('Insira a descrição.');
//         return;
//       }
//       try {
// const response = await axios.post(API_URL, {
//           name: nameInfo,
//           desc: descInfo,
//         });
//         setInfos([...infos, response.data]);
//         setNameInfo('');
//         setDescInfo('');
//         Console.log('Adicionado',);
//       } catch (error) {
//         console.error('Erro ao adicionar', error);
//       }
//     };