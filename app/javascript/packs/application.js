// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import React from 'react'
import ReactDOM from 'react-dom'
import YoSurfDay from './yo_surf_day'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('DOMContentLoaded', () => {
  const csrfToken = document.querySelector('[name=csrf-token]').content;
  ReactDOM.render(
    <YoSurfDay csrfToken={csrfToken} />,
    document.getElementById('yosurfday-home'),
  )
})
