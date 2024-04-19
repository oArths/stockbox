import * as S from "./style"
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";

const ModalDelete = ({isOpen, setOpenModal, Title,Info}) => {
    if (isOpen){
        return( <S.Body >
            <S.Container >
                <S.ContainerInfo>
                <S.Title>{Title}</S.Title>
                <S.Info>{Info}
                </S.Info>
                </S.ContainerInfo>
                <S.ButtonContainer>
                <ButtonConfirm Title="Sim" width="174px" height="48px" backgroundColor="red" fontSize="20px"/>
                <ButtonConfirm onClick={setOpenModal} Title="Não" width="174px" height="48px" backgroundColor="green" fontSize="20px"/>
                </S.ButtonContainer>
           </S.Container>
            </S.Body>)
    }
}
export default ModalDelete;



// <S.Title>Deseja Excluir?</S.Title>
//                 <S.Info>Após a exlusão os dados serão
//                     perdidos permanentemente 
//                 </S.Info>