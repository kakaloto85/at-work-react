import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons';
import { RightOutlined } from '@ant-design/icons';

function InputJob() {
  return (
    <div>
      3<h3>당신의 직책을 알려주세요</h3>
      <Link to="/SignUp/InputProfile">
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<RightOutlined />}
        ></Button>
      </Link>
    </div>
  );
}

function InputProfile() {
  const [file, setFile] = useState('');
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const setFileUrl = (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      img.append('file', e.target.files[0]);
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onload = function () {
        setFile(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      4
      <h3>
        프로필 사진을
        <br /> 등록해주세요!
      </h3>
      <Button
        icon={<UserAddOutlined id="input-file" />}
        onClick={handleClick}
      ></Button>
      <input
        type="file"
        id="input-file"
        onChange={(e) => setFileUrl(e)}
        style={{ display: 'none' }}
        ref={hiddenFileInput}
      />
      <div>
        {file ? <img className="profile_preview" src={file}></img> : ''}
      </div>
      <div>
      <Link to="/SignUp/Interest">
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<RightOutlined />}
        ></Button>
      </Link>
    </div>
    </div>
  );
}

export default InputProfile;
