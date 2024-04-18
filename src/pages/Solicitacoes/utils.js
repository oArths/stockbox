export function getBackgroudStatus(props) {
    switch (props) {
        case 'novo':
          return '#D4F4E1';
        case 'lido':
          return '#FDEDD7';
        case 'finalizado':
          return '#FCCCE0';
        default:
          return 'none';
      }
}

export function getWidthStatus(props) {
    switch (props) {
        case 'novo':
          return '80px';
        case 'lido':
          return '80px';
        case 'finalizado':
          return '80px';
        default:
          return '100%';
      }
}
export function getColorStatus(props) {
    switch (props) {
        case 'novo':
          return '#38AD68';
        case 'lido':
          return '#D6A664';
        case 'finalizado':
          return '#F22B7C';
        default:
          return '#';
      }
}
export function getMarginStatus(props) {
    switch (props) {
        case 'novo':
          return '35%';
        case 'lido':
          return '35%';
        case 'finalizado':
          return '35%';
        default:
          return '#';
      }
}
export function getPaddingStatus(props) {
    switch (props) {
        case 'novo':
          return '5px';
        case 'lido':
          return '3px';
        case 'finalizado':
          return '5px';
        default:
          return '#';
      }
}
export function getRadiusStatus(props) {
    switch (props) {
        case 'novo':
          return '2em';
        case 'lido':
          return '2em';
        case 'finalizado':
          return '2em';
        default:
          return '#';
      }
}
export function getBackgroudSelect(props) {
    switch (props) {
        case 'true':
          return '#F22B7C';
        case 'false':
          return '#F22B7C';
        default:
          return '#';
      }
}