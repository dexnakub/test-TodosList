import styled from "styled-components"

function setGridTemplateColumns(gridTemCol: number | undefined) {
    return new Array(gridTemCol).fill('1fr').join(' ');
}

export const Grid = styled.div<{ $rowGap?: string, $colGap?: string, $gridTemCol?: number }>`
    display: grid;
    row-gap: ${(props) => props.$rowGap};
    column-gap: ${(props) => props.$colGap};
    grid-template-columns: ${(props) => setGridTemplateColumns(props.$gridTemCol)};
`;
