import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import Button from '../../primitives/button';
import { SHOW_UP_BUTTON_OFFSET } from '../../../common/constants';

const UpButton = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const goUp = () => {
    document.body.scrollIntoView();
  };
  const showUpButton = scrollTop >= SHOW_UP_BUTTON_OFFSET;

  useEffect(() => {
    const onScroll = () => setScrollTop(window.pageYOffset);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [window.pageYOffset]);

  return showUpButton ? (
    <Button size="sm" variant="up" onClick={goUp}>
      <ChevronUpIcon />
    </Button>
  ) : null;
};

export default UpButton;
