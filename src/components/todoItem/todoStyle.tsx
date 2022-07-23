import { ComponentStyleConfig } from '@chakra-ui/theme';

const todoStyle: ComponentStyleConfig = {
  baseStyle: (props) => {
    const isCompleted = props.todo.completed;

    return {
      position: 'relative',
      padding: '15px',
      marginBottom: '10px',
      bgColor: 'cream.base',
      borderRadius: '6px',
      fontSize: '18px',

      '&:before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '10px',
        height: '100%',
        backgroundColor: isCompleted ? 'green.light' : 'orange.light',
        borderTopLeftRadius: '6px',
        borderBottomLeftRadius: '6px',
        zIndex: '5',
      },
    };
  },
};

export default todoStyle;
