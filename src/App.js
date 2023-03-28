import React, { Component } from "react";
import "./App.css";

import "@formatjs/intl-pluralrules/polyfill";
import "@formatjs/intl-pluralrules/locale-data/en";
import "@formatjs/intl-pluralrules/locale-data/ja";
import "@formatjs/intl-pluralrules/locale-data/pt";
import {
  IntlProvider,
  FormattedNumber,
  FormattedDate,
  FormattedTime,
  FormattedRelativeTime,
  FormattedMessage,
} from "react-intl";

import messages from "./i18n/messages";

// const messages = {
//   pt: {
//     "app.hi": "Bom dia",
//     "app.bye": "Tchau",
//   },

//   en: {
//     "app.hi": "Good Morning",
//     "app.bye": "See ya!",
//   },

//   ja: {
//     "app.hi": "おはよう",
//     "app.bye": "さようなら",
//   },
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLang: "pt",
    };
  }

  render() {
    const { state } = this;
    return (
      <div>
        <IntlProvider
          locale={this.state.currentLang}
          messages={messages[state.currentLang]}
        >
          <div>
            {/* <FormattedNumber value={123456789.12} /> */}
            {/* <FormattedDate value={new Date("2023-03-28T18:00:00")} />
            <br />
            <FormattedTime value={new Date("2023-03-28T18:00:00")} /> */}
            {/* <FormattedRelativeTime value={new Date()} /> */}

            <FormattedMessage
              id="app.hi"
              description="saudacao"
              defaultMessage="Hi"
            />
            <br />
            <FormattedMessage
              id="app.bye"
              description="despedida"
              defaultMessage="Bye"
            />
          </div>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
