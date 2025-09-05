import { FilePenLine } from 'lucide-react';

import FormDK from '../Form';

import './index.css';

const BubbleForm = () => {
  return (
    <FormDK className='bubble-form p-relative'>
      <div className='bubble-button p-relative'>
        <FilePenLine size={24} />
      </div>
    </FormDK>
  );
};

export default BubbleForm;
