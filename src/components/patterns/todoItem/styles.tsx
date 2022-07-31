import { ComponentStyleConfig } from '@chakra-ui/theme';

const todoStyle: ComponentStyleConfig = {
  baseStyle: (props) => {
    const isCompleted = props.todo.completed;

    return {
      position: 'relative',
      padding: '16px',
      marginBottom: '12px',

      bgColor: 'cream.base',
      borderRadius: '8px',
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
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
      },
    };
  },
};

export default todoStyle;
