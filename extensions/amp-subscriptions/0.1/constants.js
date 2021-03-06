/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @fileoverview Shared constants. */

/**
 * How long to wait before giving up on an entitlements request.
 * @const
 */
export const ENTITLEMENTS_REQUEST_TIMEOUT = 3000;

/**
 * Possible score factors.
 * @const @enum {string}
 */
export const SubscriptionsScoreFactor = {
  // User is known to platform and has a form of payment registered
  IS_READY_TO_PAY: 'isReadyToPay',
  // Platform supports the current viewer environment
  SUPPORTS_VIEWER: 'supportsViewer',
};

/**
 * All other score factors are ignored if not specified in the publisher
 * config so adding a default here would be meaningless.
 */
export const DEFAULT_SCORE_CONFIG = {};
