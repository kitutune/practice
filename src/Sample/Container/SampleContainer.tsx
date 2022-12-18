import { FC } from 'react';
import SampleModule from '../Sample.module.css';
export const SampleContainer: FC = () => {
  return (
    <div className={SampleModule.container}>
      <div className={SampleModule.header}>header</div>
      <div className={SampleModule.nav}>nav</div>
      <div className={SampleModule.contents}>contents</div>
      <div className={SampleModule.aside}>aside</div>
      <div className={SampleModule.footer}>footer</div>
    </div>
  );
};
