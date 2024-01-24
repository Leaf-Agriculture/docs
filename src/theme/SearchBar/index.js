/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useCallback } from "react";
import classnames from "classnames";
import { useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { MendableSearchBar } from '@mendable/search'

export default function SearchBarWrapper() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()
  return (
    <div className="mendable-search">
      <MendableSearchBar
        anon_key={"d78bd0b5-f2fb-4529-8637-0371010cf11f"}
        style={{ accentColor: '#2F5F57', darkMode: false, hideSources: true }}
        searchBarStyle={{
            backgroundColor: '#F5F5F5',
            borderColor: '',
            color: '#606C79',
            shadow: true,
            prettySources: true,
            borderRadius:"30px",
            style:"position: relative; vertical-align: top;",
        }}
        placeholder="Search..."
        dialogPlaceholder="How to deploy this application?"
      />
    </div>
  )
}

//export default Search;
