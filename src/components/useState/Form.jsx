import { useState } from "react";

const registeredUsers = [
  {
    username: "choclito",
    password: "ojitos-lindos-12",
  },
  {
    username: "chanchito",
    password: "me-llamo-pato-12",
  },
  {
    username: "girasol",
    password: "genero-soles-12",
  },
  {
    username: "polie",
    password: "ya-no-chambeo-12",
  },
  {
    username: "blu",
    password: "toy-chiquito-12",
  },
];

const successClass = "text-green-600";
const errorClass = "text-rose-500";

export const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateField = (name, value) => {
    let errorMsg = "";
    if (name === "username" && !value) {
      errorMsg = "Please enter your username";
    }
    if (name === "password" && !value) {
      errorMsg = "Please enter your password";
    }
    return errorMsg;
  };

  const onChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const validateForm = () => {
    const newErrors = {
      username: validateField("username", formData.username),
      password: validateField("password", formData.password),
    };
    setErrors(newErrors);
    return !newErrors.username && !newErrors.password;
  };

  // ... var react para los msjs del form
  // ... var react para el loading
  // ... implementar un loading balurdo
  // ... mostrar error cuando los datos no coincidan
  // ... mostrar successful login
  // ... reiniciar el estado de la variable reactiva del form a vacio
  // definir clases dinamicas para los mensajes del formulario
  // anadir emojis

  const [isLoading, setIsLoading] = useState(false);

  const [formMsg, setFormMsgs] = useState({
    type: "success",
    msg: "",
  });

  const validateUser = (userData) => {
    setIsLoading(true);
    const formErrorMsg = "Incorrect username or password. Please try again.";

    setTimeout(() => {
      try {
        const user = registeredUsers.find((ele) => {
          return (
            ele.username === userData.username &&
            ele.password === userData.password
          );
        });

        if (!user) throw new Error(formErrorMsg);

        setFormMsgs({
          type: "success",
          msg: "Login successful",
        });

        setFormData({
          username: "",
          password: "",
        });
      } catch (error) {
        console.log(error);
        setFormMsgs({
          type: "error",
          msg: formErrorMsg,
        });
      } finally {
        setIsLoading(false);
        setTimeout(() => {
          setFormMsgs({
            type: "success",
            msg: "",
          });
        }, 2000);
      }
    }, 1200);
  };

  const log = (e) => {
    e.preventDefault();
    if (validateForm()) {
      validateUser(formData);
    }
  };

  const formMsgClass = formMsg.type === "success" ? successClass : errorClass;

  return (
    <section className="card-primary row-span-3">
      <h2 className="heading-primary mb-4 text-center">
        <span className="heading-gradient">LOGIN</span>
      </h2>
      <form action="" className="flex flex-col gap-4" onSubmit={log}>
        <div className="min-h-[60px]">
          <input
            type="text"
            name="username"
            className="input-default mb-1.5"
            placeholder="Username"
            value={formData.username}
            onChange={onChangeFormData}
          />
          {errors.username && (
            <p className="text-rose-500 text-xs italic">{errors.username}</p>
          )}
        </div>

        <div className="min-h-[60px]">
          <input
            type="password"
            name="password"
            className="input-default mb-1.5"
            placeholder="Password"
            value={formData.password}
            onChange={onChangeFormData}
          />
          {errors.password && (
            <p className="text-rose-500 text-xs italic">{errors.password}</p>
          )}
        </div>
        <button className="btn btn-blue">
          {isLoading ? <span className="italic">...Loading</span> : "Login"}
        </button>
      </form>
      <p className={`min-h-4 text-xs italic mt-4 ${formMsgClass}`}>
        <span>{formMsg.msg}</span>
      </p>
    </section>
  );
};

export default Form;
