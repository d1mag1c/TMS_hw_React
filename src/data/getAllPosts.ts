import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {addPosts} from "../store/postsReducer/action";

export const GetAllPosts = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState(true)
    useEffect(() => {
        if (state) {
            fetch('https://script.googleusercontent.com/macros/echo?user_content_key=w02M5U7PYIHhSnQfZbOPfFi4LFMRrA7zK1kuWhX7BW6A5LMVdq8izPw8qfT052uCmQtco1_5cd1-wYkm48xJtQUw7Vpz_Onhm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGtK0vNEbbNDNpmGVBpgCfwxv0Q9QzavVuVdVc-rzypYJopHfEg0-rJsfps52gKhYnxY-NSl6ER11_3OKdRE4luhg57u3_yZqNz9Jw9Md8uu&lib=MQZ5xq9Sq8g9bTJ1E_S6rmZHevWmyVyhL')
                .then(response => response.json())
                .then(data => {
                    dispatch(addPosts(data))
                    setState(false)
                })
        }
    },)
    return {state}
}

