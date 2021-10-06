import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      {name} 님의 TODO APP
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;