import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import colors from '../styles/colors';


const Loader = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://cdn.lordicon.com/lordicon.js';
      script.async = true;
      script.defer = true;

      const handleScriptLoad = () => {
          // Функция обратного вызова для выполнения после загрузки скрипта
          // Здесь можно включить дополнительную логику
          console.log('Скрипт Lordicon загружен');
      };

      script.onload = handleScriptLoad;

      document.body.appendChild(script);
    
      return () => {
        document.body.removeChild(script);
      };
	  }, []);
    const colorPallet = colors();
    const { midnight } = colorPallet;
  return (

    <Flex
        width={'100%'}
        h={'100vh'}
        justify={'center'}
        align={'center'}
        backgroundColor={midnight}
    >
        <lord-icon
            src="https://cdn.lordicon.com/lqxfrxad.json"
            trigger="loop"
            state="loop-queue"
            colors="primary:#ffffff"
            style={{ width: '130px', height: '130px' }}
        ></lord-icon>
    </Flex>
  );
};

export default Loader;
