import { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';

const Account = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = e => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        {/* Username */}
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Username
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            // Cuando el usuario digita algo, cambia el valor del state userdata.username
            onChange={handleChange}
            // El value del input es el valor del state userData.username
            value={userData.username || ''}
            name="username"
            placeholder="Username"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Password
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            // Cuando el usuario digita algo, cambia el valor del state userdata.password
            onChange={handleChange}
            // El value del input es el valor del state userData.password
            value={userData.password || ''}
            name="password"
            placeholder="Password"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
