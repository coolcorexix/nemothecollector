import t from"react";import r from"styled-components";const e=r.div`
    width: ${t=>t.width?t.width:"24px"};
    height: ${t=>t.height?t.height:"24px"};
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  `;class o extends t.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0}}render(){return this.state.hasError?t.createElement(e,null,"!"):this.props.children}}export{o as IconErrorBoundary};
