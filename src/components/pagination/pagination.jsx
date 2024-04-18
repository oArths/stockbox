import * as S from "./style"

const max_items = 5;
const max_left = (max_items - 1) / 2;
//  limit - itens por pagina que estão aparecendo
// total - total de items recebido
//  offset - pular alguns itens anteriores ao estado atual
const Pagination = ({limit, total, offset, setOffset}) => {
    //  pagina atual as paginas que ja foram menos o limiti de itens
    const current = offset ? (offset / limit) + 1 : 1;
    const pages  = Math.ceil(total / limit);
    const first = Math.max(current - max_left, 1);
    let start = Math.max(current - Math.floor(max_items / 2), 1);
    let end = Math.min(start + max_items - 1, pages);

    if (end - start < max_items - 1) {
        start = Math.max(end - max_items + 1, 1);
    }


    return(
        <S.Body>
            {Array.from({ length: end - start + 1 }).map((_, index) => start + index).map((page) => (
                <S.Button key={page} active={page === current}  onClick={() => setOffset((page - 1) * limit)}>{page}</S.Button>
            ))}
        </S.Body>
    );
}
export default Pagination;