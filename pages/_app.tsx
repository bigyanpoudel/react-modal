import 'antd/dist/antd.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { Modal } from '../utils/model_utils';
import { ModalWrapper } from '../component/molecules';

let globalModalRef : any;
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
Modal.registerModal(globalModalRef);
  },[])
  return <><Component {...pageProps} />
  <ModalWrapper ref={(ref)=> globalModalRef = ref}/>
  </>
}

export default MyApp
