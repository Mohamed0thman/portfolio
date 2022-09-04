/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Paragraph, Text, Input, Button } from "theme-ui";
import { useRef, useState } from "react";
import { keyframes } from "@emotion/react";

import Image from "../components/image";

import scrollIcon from "../assets/icons/scroll.svg";

import BackgroundImage from "../components/background_image";

export default function MessageSection() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a status in state to handle the response from our API.
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const handleMailChimpResponse = (errorMsg, successMsg) => {
    if (errorMsg) {
      // 4. If there was an error, update the message in state.
      setStatus({
        info: { error: true, msg: errorMsg },
      });

      return;
    }

    // 5. Clear the input value and show a success message.
    setStatus({
      submitted: true,
      submitting: false,
      info: { error: false, msg: successMsg },
    });
    inputEl.current.value = "";
  };

  const handleSendGridResponse = (status, msg) => {
    if (status === 200) {
      // 5. Clear the input value and show a success message.
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      inputEl.current.value = "";
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const subscribe = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    //for mailChimp integration
    const { error } = await res.json();
    handleMailChimpResponse(
      error,
      "Success! 🎉 You are now subscribed to the newsletter."
    );
    // For sendGrid integration
    const text = await res.text();
    handleSendGridResponse(res.status, text);
  };
  return (
    <section sx={styles.message} id="message">
      <BackgroundImage />
      <Container sx={styles.message.container}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: " center",
            flexDirection: " column",
          }}
        >
          <Paragraph
            style={{
              fontSize: "25px",
              marginBottom: "15px",
            }}
          >
            Wanna make business together?
            <Text
              style={{
                color: "#FCA311",
                marginLeft: "10px",
                fontWeight: "700",
              }}
            >
              Let’s talk
            </Text>
          </Paragraph>

          <Input
            ref={inputEl}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <Input
            ref={inputEl}
            id="message"
            name="message"
            type="text"
            placeholder="Your message"
          />

          <div>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">{status.info.msg}</div>
            )}
          </div>
          <Button
            type="submit"
            disabled={status.submitting}
            className="subscribe__btn"
            aria-label="HIRE ME"
          >
            HIRE ME
          </Button>
        </Box>
      </Container>
    </section>
  );
}

const shine = keyframes`
  
0%{
  background-position: 00% center;
}
50%{
  background-position: 100% center;
}
100%{
  background-position: 0% center;
}

`;

const styles = {
  message: {
    backgroundColor: "#252F33",
    position: "relative",
    zIndex: 2,
    overflow: "hidden",
    container: {
      pb: ["65px", "70px"],
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },

    input: {
      background: "#FFFFFF",

      borderRadius: "14px",
      marginBottom: "15px",

      "&::placeholder": {
        fontSize: "22px",
        color: "#787878",
      },
    },
  },
};
