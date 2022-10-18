/**
 * Licensed to The Apereo Foundation under one or more contributor license
 * agreements. See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 *
 * The Apereo Foundation licenses this file to you under the Educational
 * Community License, Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of the License
 * at:
 *
 *   http://opensource.org/licenses/ecl2.txt
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 */
'use strict';

angular.module('adminNg.resources')
.factory('SeriesTobiraResource', ['$resource', function ($resource) {
  var transform = function (data, getResponseHeaders, status) {
    if (status === 200) {
      return JSON.parse(data);
    } else {
      return undefined;
    }
  };

  return $resource('/admin-ng/series/:id/tobira/pages', {id: '@id'}, {
    get: { method: 'GET', isArray: false, transformResponse: transform }
  });
}]);