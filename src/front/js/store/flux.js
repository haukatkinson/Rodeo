const getState = ({ getStore, getActions, setStore }) => {
  let BACKEND_URL = process.env.BACKEND_URL;
  return {
    store: {
      rodeo: [],
      alert: {
        type: "",
        msg: "",
        show: false,
      },
      token: null,
      message: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      signup: (data) => {
        const store = getStore();

        fetch(`${process.env.BACKEND_URL}/api/signup`, {
          method: "POST",

          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => {
            if (res.status === 409)
              throw new Error(
                "The email address already exists. Please login to your account to continue."
              );

            return res.json();
          })
          .then((data) => {
            console.log("data ", data);
            getActions().setAlert({
              type: "success",
              msg: data.msg,
              show: true,
            });

            return true;
          })
          .catch((err) => err);
      },
      syncTokenFromSessionStore: () => {
        const token = sessionStore.getItem("token");
        console.log(
          "Application just loaded, syncing the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      login: async (email, password) => {
        console.log("email: " + email, "password: " + password);
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        // fetch(BACKEND_URL + "/api/login", opts)
        //   .then((resp) => resp.json())
        //   .then((data) => console.log(data));
        try {
          const resp = await fetch(BACKEND_URL + "/api/login", opts);
          if (resp.status !== 200) {
            alert("An error has occurred");
            return false;
          }

          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data.access_token); //Access token needed here
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has be an error logging in", error);
        }
      },
      setAlert: (payload) => {
        /* payload should be an object with the following shape:
                    {
                        type: "",
                        msg: "",
                        show: false
                    }
                    type either: danger, success, warning
                */
        setStore({ alert: payload });
      },
      resetAlert: () => {
        setStore({
          alert: {
            type: "",
            msg: "",
            show: false,
          },
        });
      },
      register: (data) => {
        const store = getStore();

        fetch(`${process.env.BACKEND_URL}/api/register`, {
          method: "POST",

          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }).then((res) => {
          if (res.status === 409)
            throw new Error(
              "The email address already exists. Please login to your account to continue."
            );

          return res.json();
        });
      },
      getRegistrations: () => {
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(`${process.env.BACKEND_URL}/api/registrations`, opts)
          .then((rep) => rep.json())
          .then((data) => {
            console.log(data);
            setStore({
              rodeo: data,
            });
          });
      },
      deleteRegister: (id) => {
        const opts = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(`${process.env.BACKEND_URL}/api/register/${id}`, opts)
          .then((rep) => rep.json())
          .then((data) => {
            console.log(data);
            setStore({
              rodeo: data,
            });
          });
      },
    },
  };
};

export default getState;
