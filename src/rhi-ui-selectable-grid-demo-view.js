/**
 * @license
 * Copyright (c) 2018 Rick Hansen Institute. All rights reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
'use strict';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { RhiUiSelectableGrid } from '@rhi-ui/selectable-grid/rhi-ui-selectable-grid.js';
import './shared-styles.js';

class RhiUiSelectableGridDemoView extends PolymerElement {
    static get is() { return 'rhi-ui-selectable-grid-demo-view'; }

    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
                    margin: 0;
                    padding: 16px;
                }

                .row {
                    display: flex;
                    width: 100%;
                }
            </style>
            <h3>&lt;rhi-ui-selectable-grid&gt;</h3>
            <div class="container">
                <rhi-ui-selectable-grid>
                    <div class="row">
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                    </div>
                    <div class="row">
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                    </div>
                    <div class="row">
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                        <rhi-ui-selectable-grid-cell></rhi-ui-selectable-grid-cell>
                    </div>
                </rhi-ui-selectable-grid>
            </div>
    `;
    }
}

window.customElements.define(RhiUiSelectableGridDemoView.is, RhiUiSelectableGridDemoView);