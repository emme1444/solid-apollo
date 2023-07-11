import { createComponent as S } from "solid-js/web";
import { createContext as Q, useContext as k, createResource as y, onCleanup as h, createSignal as d, untrack as g } from "solid-js";
import { createStore as v, reconcile as P } from "solid-js/store";
import { mergeOptions as O } from "@apollo/client/core";
import { ApolloClient as G, InMemoryCache as H, gql as J } from "@apollo/client/core";
const A = Q(), D = (o) => S(A.Provider, {
  get value() {
    return o.client;
  },
  get children() {
    return o.children;
  }
}), w = () => {
  const o = k(A);
  if (!o)
    throw new Error("apolloClient could not be found in context. Did you wrap your Component with <ApolloProvider client={...} /> ?");
  return o;
}, I = (o, e = {}) => {
  const p = w(), u = () => {
    if (typeof e != "function")
      return e.skip && console.warn(
        `you passed options.skip to createQuery, but the options are not an acccessor.
This query will never execute!

Replace your options with a function.`
      ), e;
    const n = typeof e == "function" ? e() : e;
    return n.skip ? !1 : n;
  }, [r] = y(u, (n) => {
    const i = p.watchQuery({ query: o, ...n }), [f, s] = v({});
    let l = !1;
    return new Promise((c, t) => {
      const a = i.subscribe({
        error: t,
        next: ({ data: m, error: b }) => {
          b && t(b), l ? s(P(m)) : (l = !0, s(m), c(f));
        }
      });
      h(() => a.unsubscribe());
    });
  });
  return r;
}, L = (o, e = {}) => {
  const p = w();
  let u = null, r = null;
  const [n, i] = d(!1), [f] = y(n, async (s) => {
    let l;
    try {
      l = await p.mutate(s);
    } catch (a) {
      throw r && (r(a), r = null), a;
    }
    const { data: c, errors: t } = l;
    if (t)
      throw r && (r(t[0]), r = null), t[0];
    return u && (u(c), u = null), c;
  });
  return [
    async (s = {}) => {
      const l = O(s, {
        mutation: o,
        ...typeof e == "function" ? g(e) : e
      });
      return i(l), new Promise((c, t) => {
        u = c, r = t;
      });
    },
    f
  ];
}, T = (o, e = {}) => {
  const p = w(), [u] = y(e, (r) => {
    const n = p.subscribe({ query: o, ...r }), [i, f] = v({});
    let s = !1;
    return new Promise((l, c) => {
      const t = n.subscribe({
        error: c,
        next: ({ data: a }) => {
          s ? f(P(a)) : (s = !0, f(a), l(i));
        }
      });
      h(() => t.unsubscribe());
    });
  });
  return u;
}, j = (o, e = {}) => {
  const p = w(), [u, r] = d(!1);
  let n = null, i = null;
  const [f] = y(u, (s) => {
    const l = p.watchQuery({ query: o, ...s }), [c, t] = v({});
    let a = !1;
    return new Promise((m, b) => {
      const R = l.subscribe({
        error: b,
        next: ({ data: x, error: C }) => {
          C && (i && (i(C), i = null), b(C)), a ? t(P(x)) : (a = !0, n && (n(x), n = null), t(x), m(c));
        }
      });
      h(() => R.unsubscribe());
    });
  });
  return [
    async (s = {}) => {
      const l = O(s, {
        query: o,
        ...typeof e == "function" ? g(e) : e
      });
      return r(l), new Promise((c, t) => {
        n = c, i = t;
      });
    },
    f
  ];
};
export {
  G as ApolloClient,
  D as ApolloProvider,
  H as InMemoryCache,
  j as createLazyQuery,
  L as createMutation,
  I as createQuery,
  T as createSubscription,
  J as gql,
  w as useApollo
};
