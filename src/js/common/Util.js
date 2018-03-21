/**
 * Created by Anchao on 2017/2/27.
 */

// 公共js
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Immutable from 'immutable'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import {Router, Route, IndexRoute, Link, IndexRedirect, hashHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import loggerCreator from 'redux-logger'
import promise from 'redux-promise'
import {createSelector} from 'reselect'

// state日志
const logger = loggerCreator({
  stateTransformer: (state) => {
    let newState = {}

    for (var i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS()
      } else {
        newState[i] = state[i]
      }
    }

    return newState
  }
})

// 中间件
const middleware = routerMiddleware(hashHistory)

// store创建工具
const storeCreateByReducer = reducers => {
  return createStore(
        combineReducers({
          ...reducers,
          routing: routerReducer
        }),
        applyMiddleware(middleware, thunkMiddleware, logger)
    )
}

// history创建工具
const historyCreateByStore = store => syncHistoryWithStore(hashHistory, store)

export {
    $,
    dialog,
    React,
    ReactDOM,
    PropTypes,
    PureRenderMixin,
    Immutable,
    storeCreateByReducer,
    combineReducers,
    Provider,
    connect,
    promise,
    createSelector,
    Router,
    Route,
    IndexRoute,
    IndexRedirect,
    Link,
    historyCreateByStore,
    echarts
}
