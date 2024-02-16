import { useEffect, useState } from "react";
import { useResponsiveContext } from "../../Context/IsMobile";
import "../../styles/Banner/manifiest.css";
import User_Login from "./User_Login";
import { user_is_logged } from "../../Controllers/user_is_logged";
import User_Menu from "./User_Menu";

export default function Banner() {
  const respo = useResponsiveContext();

  const [user_logged, setUser_logged] = useState(false);
  useEffect(() => {
    user_is_logged()
      .then((res) => {
        setUser_logged(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className={`banner-cont-${respo}`} style={{}}>
        <div
          onClick={() => {
            window.location.href = "/home";
          }}
          className={`banner-img-${respo}`}
        ></div>
      </div>
      <div> 
        <div>
            
        </div>
        {/* <table>
          <tr>
            <td>
              <button>
                <a href="">
                  <a href="/cards/show-cards">SHOW CARDS</a>
                </a>
              </button>
            </td>
            <td>
              <button>
                <a rel="stylesheet" href="/cards/create-card">
                  CREATE CARD
                </a>
              </button>
            </td>
          </tr>
        </table> */}
        {user_logged ? (
          <User_Menu></User_Menu>
        ) : (
          <>
            <User_Login></User_Login>
          </>
        )}
      </div>
    </div>
  );
}
