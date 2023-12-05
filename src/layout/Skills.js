const Skills = () => {
  return (
    <div className="flex justify-between" style={{ width: '330px', height: '430px', top: '700px', left: '239px', justifyContent: 'space-between' }}>
      <h1 className="pl-1 mb-0 text-2xl">Skills</h1>
      <div>
        <div className="logo1 flex items-center ">
          <img src="javscript.png" alt="javscript-icon" className=""/>
        
        </div>
        <div className="l">
          <img src="react.png" alt="react-icon" className="" />
        </div>
        <div>
          <img src="redux.png" alt="redux-icon" className=""/>
        </div>
      </div>
      <div>
        <div className="logo2">
          <img src="node.png" alt="node-icon" />
        </div>
        <div>
          <img src="figma.png" alt="figma-icon flex items-center" />
       
        </div>
        <div>
          <img src="vscode.png" alt="vscode-icon" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
