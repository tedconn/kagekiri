/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
// Type definitions for kagekiri
export function querySelector(selector: string, context?: Node): Element | null;
export function querySelectorAll(selector: string, context?: Node): Element[];
export function getElementsByClassName(names: string, context?: Node): Element[];
export function getElementsByTagName(tagName: string, context?: Node): Element[];
export function getElementsByTagNameNS(namespaceURI: string, localName: string, context?: Node): Element[];
export function getElementById(id: string, context?: DocumentOrShadowRoot): Element | null;
export function getElementsByName(name: string, context?: DocumentOrShadowRoot): Element[];
export function matches(selector: string, context: Node): boolean;
export function closest(selector: string, context?: Node): Element | null;
