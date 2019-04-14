/* eslint-disable flowtype/require-return-type */
import {test} from "tap"

import endsWith from "./index"

test(({ok, end}) => {
  ok(endsWith("period")("I have no period"))
  end()
})

test(({notOk, end}) => {
  notOk(endsWith("I have")("I have no period."))
  end()
})
