import styled from "styled-components"

function getLevelColor(level: string | undefined) {
    if (level === 'danger') return 'red';
    if (level === 'warning') return 'orange';
    else return '#3333';
}
export const Title = styled.h3<{ level?: string }>`
    color: ${(props) => getLevelColor(props.level)};
`;
