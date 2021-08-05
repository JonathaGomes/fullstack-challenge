import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      textPrimary: string;
      textSecondary: string;
      placeholder: string;
      colorTitle: string;
      colorTextButton: string;
      backgroundButton: string;
      backgroundInput: string;
      navDetailsBackground: string;
      backgroundBookDetails: string;
      label: string;
    };
  }
}
