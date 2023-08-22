import { extendTheme } from "@chakra-ui/react";

const orangeTheme = {
    colors: {
        background: "orange.500",
        text: "black",
      },
 }; 

const redTheme = {
    colors: {
        background: "red.400",
        text: "black" ,
    }
        
}; 

const yellowTheme = {
    colors: {
        background: "yellow.500",
        text: "black" ,
    }
        
}; 

const blueTheme = {
  colors: {
    background: "blue.400",
    text: "black",
  },
};

const greenTheme = {
    colors: {
        background: "green.400",
        text: "black",
      },
};

const themes = {
  orange: orangeTheme,
  red: redTheme,
  yellow: yellowTheme,
  blue: blueTheme,
  green: greenTheme,
};

// export { themes };
const initialCustomTheme = extendTheme(orangeTheme);

export { themes, initialCustomTheme };
