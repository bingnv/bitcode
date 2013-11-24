$('<audio id="jincha"><source src="/au/jincha.ogg" type="audio/ogg"><source src="/au/jincha.mp3" type="audio/mpeg"><source src="/au/jincha.wav" type="audio/wav"></audio>').appendTo('body');

$('<audio id="sicha"><source src="/au/sicha.ogg" type="audio/ogg"><source src="/au/sicha.mp3" type="audio/mpeg"><source src="/au/sicha.wav" type="audio/wav"></audio>').appendTo('body');

!
function() {
	var t,
	n,
	e,
	r,
	i,
	o,
	u,
	a,
	l,
	s,
	c,
	f,
	h,
	d,
	p,
	m,
	g,
	v,
	y,
	_,
	x,
	b,
	C,
	w,
	T,
	k,
	B,
	S,
	M,
	D,
	F,
	A,
	P,
	U,
	I,
	R,
	N,
	E,
	L,
	O,
	G,
	Y,
	W,
	H,
	q,
	j,
	z,
	J,
	X,
	K,
	Q,
	V,
	Z,
	tn,
	nn,
	en,
	rn,
	on,
	un,
	an,
	ln,
	sn,
	cn,
	fn,
	hn,
	dn,
	pn,
	mn,
	gn,
	vn,
	yn,
	_n,
	xn,
	bn,
	$n,
	Cn,
	wn,
	Tn,
	kn,
	Bn,
	Sn,
	Mn,
	Dn,
	Fn,
	An,
	Pn,
	Un,
	In,
	Rn,
	Nn,
	En,
	Ln,
	On,
	Gn,
	Yn,
	Wn,
	Hn,
	qn,
	jn,
	zn,
	Jn,
	Xn,
	Kn,
	Qn,
	Vn,
	Zn,
	te,
	ne,
	ee,
	re,
	ie,
	oe,
	ue,
	ae,
	le,
	se,
	ce,
	fe,
	he = {}.hasOwnProperty,
	de = [].slice; !
	function() {
		var t,
		n,
		e;
		$(function() {
			function r() {
				var t,
				n,
				e,
				r,
				i;
				return r = $(this),
				r.addClass("dropdown-hover"),
				t = $(".dropdown-data", this),
				i = .5 * (r.outerWidth() - t.outerWidth()),
				e = r.offset().left + r.outerWidth() - $(window).width(),
				e > i && (i = e),
				n = r.offset().left + r.outerWidth() - t.outerWidth(),
				i > n && (i = n),
				t.css("right", i)
			}
			function i() {
				return $(this).removeClass("dropdown-hover")
			}
			var o,
			u,
			a;
			for (a = $(".dropdown"), o = 0, u = a.length; u > o; o++) t = a[o],
			n = function() {
				var t = this;
				return $(".t", this).click(function() {
					return $(".dropdown-data", t).is(":visible") ? i.call(t) : r.call(t)
				})
			},
			n.call(t);
			return window.$is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
			$is_mobile ? void 0: (e = !1, $(".dropdown").hover(function() {
				return r.call(this)
			},
			function() {
				return i.call(this)
			}))
		})
	} (),
	function() {
		var t,
		n,
		e;
		$(function() {
			var r;
			r = function(t, n) {
				var r,
				i,
				o,
				u,
				a,
				l,
				s,
				c,
				f;
				return o = $("#setting_" + n.id),
				s = null != (c = null != (f = $.cookie(n.id)) ? f.toLowerCase() : void 0) ? c: "",
				i = !1,
				r = null,
				l = function() {
					var t,
					l;
					t = n.options,
					l = [];
					for (u in t) he.call(t, u) && (a = t[u], l.push(function(t, u) {
						var a;
						return a = $("li[value=" + u + "]", o),
						a.active = function() {
							return a.addClass("active"),
							n.value = u
						},
						a.click(function() {
							return $("li", o).removeClass("active"),
							a.active(),
							$.cookie(n.id, u, {
								expires: 3650,
								path: "/"
							}),
							n.refresh ? window.location.reload() : (e(), world_draw_main())
						}),
						u === s && (i = !0, a.active()),
						u === n["default"] && (r = a),
						a
					} (u, a)));
					return l
				} (),
				i ? void 0: n["default"] && r ? r.active() : l[0].active()
			};
			for (t in $settings) he.call($settings, t) && (n = $settings[t], r(t, n));
			return (e = function() {
				var t;
				return "line" === (t = $settings.stick_style.value) || "line_o" === t ? $(".line_style").show() : $(".line_style").hide()
			})(),
			null
		})
	} (),
	Qn = on = ee = rn = Xn = I = en = ne = Yn = s = Pn = Kn = r = c = F = Mn = Dn = Fn = Hn = null,
	function() {
		var t,
		n;
		return rn = function(t, n) {
			var e,
			r,
			i;
			return i = !1,
			r = t,
			e = function() {
				function e() {
					r > 0 ? ee(16,
					function() {
						e(r -= 16)
					}) : o()
				}
				function o() {
					return n(),
					i = !1
				}
				return r = t,
				i ? !0: (i = !0, e(), void 0)
			}
		},
		rn.statuses = {},
		Qn = function() {
			return console.log.apply(console, arguments)
		},
		on = function() {
			return console.log.apply(console, [new Date].concat(de.call(arguments)))
		},
		ee = function(t, n) {
			return setTimeout(n, t)
		},
		I = function() {
			var t,
			n,
			e,
			r,
			i,
			o,
			u,
			a;
			for (e = arguments[0], r = 3 <= arguments.length ? de.call(arguments, 1, i = arguments.length - 1) : (i = 1, []), n = arguments[i++], a = [], o = 0, u = n.length; u > o; o++) t = n[o],
			"object" == typeof t && t.length ? a.push(e.apply(null, de.call(r).concat(de.call(t)))) : a.push(e.apply(null, de.call(r).concat([t])));
			return a
		},
		ne = function(t) {
			return ("undefined" != typeof console && null !== console ? console.time: void 0) ? t() : t()
		},
		Yn = function(t) {
			return t[t.length - 1]
		},
		en = function(t) {
			var n,
			e,
			r;
			if (t.length) return t.slice(0);
			e = {};
			for (n in t) he.call(t, n) && (r = t[n], e[n] = r);
			return e
		},
		t = 0,
		s = function(n) {
			var e,
			r,
			i;
			for (i = [], e = r = 0; n >= 0 ? n > r: r > n; e = n >= 0 ? ++r: --r) i.push(t++);
			return i
		},
		Pn = function() {
			var t,
			n,
			e,
			r,
			i,
			o;
			return t = 1 <= arguments.length ? de.call(arguments, 0) : [],
			n = t.pop(),
			i = t[0],
			e = t[1],
			null == e && (e = {}),
			"?" !== i[i.length - 1] && (e.nonce = Date.now()),
			"undefined" != typeof XDomainRequest && null !== XDomainRequest ? (i = -1 === i.indexOf("?") ? i + "?" + $.param(e) : i + "&" + $.param(e), o = new XDomainRequest, o.open("GET", i), o.onload = function() {
				return e = $.parseJSON(o.responseText),
				e ? n(null, e) : n(new Error("parse json failed"), null)
			},
			o.onerror = function() {
				return n("error", null)
			},
			o.ontimeout = function() {},
			o.onprogress = function() {},
			o.timeout = 6e4, o.send(), o) : (r = $.ajax({
				url: i,
				type: "GET",
				dataType: "json",
				timeout: 6e4,
				data: e
			}), r.done(function(t) {
				return n(null, t)
			}), r.fail(function(t, e, r) {
				var i;
				return "error" === e && (e = ""),
				i = r || e || "",
				n(new Error(i), null)
			}))
		},
		Kn = function(t) {
			var n;
			return n = function() {
				function n(n) {
					return n ? t(i) : r.apply(null, e)
				}
				var e,
				r,
				i,
				o,
				u;
				o = arguments[0],
				e = 3 <= arguments.length ? de.call(arguments, 1, u = arguments.length - 1) : (u = 1, []),
				r = arguments[u++],
				o.apply(null, de.call(e).concat([function() {
					n((i = arguments[0], e = 2 <= arguments.length ? de.call(arguments, 1) : [], i))
				}]))
			}
		},
		r = function() {
			function t() {
				this.push_cbs = [],
				this.args = [],
				this.shift_cbs = []
			}
			var n;
			return t.prototype.push = function() {
				var t,
				n,
				e,
				r;
				return t = 2 <= arguments.length ? de.call(arguments, 0, r = arguments.length - 1) : (r = 0, []),
				n = arguments[r++],
				(e = this.shift_cbs.shift()) ? this.process(t, e, n) : (this.push_cbs.push(n), this.args.push(t))
			},
			t.prototype.unshift = function() {
				var t,
				n,
				e,
				r;
				return t = 2 <= arguments.length ? de.call(arguments, 0, r = arguments.length - 1) : (r = 0, []),
				n = arguments[r++],
				(e = this.shift_cbs.shift()) ? this.process(t, e, n) : (this.push_cbs.unshift(n), this.args.unshift(t))
			},
			t.prototype.shift = function(t) {
				var n,
				e;
				return (e = this.push_cbs.shift()) ? (n = this.args.shift(), this.process(n, t, e)) : this.shift_cbs.push(t)
			},
			n = 0,
			t.prototype.process = function(t, e, r) {
				function i() {
					return r(),
					e.apply(null, t)
				}
				100 === ++n ? (n = 0, ee(0,
				function() {
					i()
				})) : i()
			},
			t
		} (),
		n = {},
		Mn = function() {
			var t,
			e,
			r,
			i,
			o;
			return i = arguments[0],
			t = 3 <= arguments.length ? de.call(arguments, 1, o = arguments.length - 1) : (o = 1, []),
			e = arguments[o++],
			(r = n[i]) ? r.channel.push(t, e) : void 0
		},
		Dn = function() {
			var t,
			e,
			r,
			i,
			o;
			return i = arguments[0],
			t = 3 <= arguments.length ? de.call(arguments, 1, o = arguments.length - 1) : (o = 1, []),
			e = arguments[o++],
			(r = n[i]) ? r.channel.unshift(t, e) : void 0
		},
		Fn = function(t, e) {
			var i;
			return (i = n[t]) ? i.actions.push(e) : (i = n[t] = {
				actions: [e],
				channel: new r,
				running: !1
			},
			function() {
				function t() {
					i.channel.shift(function() {
						function o() {
							l++,
							u()
						}
						function u() {
							s > l ? (e = c[l], e.apply(null, de.call(n).concat([function(t) {
								o(t)
							}]))) : a()
						}
						function a() {
							t(r)
						}
						var l,
						s,
						c;
						n = arguments[0],
						c = i.actions,
						l = 0,
						s = c.length,
						u()
					})
				}
				var n,
				r = this;
				t()
			} ())
		},
		Hn = function() {
			function t() {
				r(i,
				function() {
					return e()
				})
			}
			var n,
			e,
			r,
			i,
			o,
			u;
			return n = 3 <= arguments.length ? de.call(arguments, 0, u = arguments.length - 2) : (u = 0, []),
			r = arguments[u++],
			e = arguments[u++],
			o = 2e3,
			i = Kn(function(n) {
				Mn("loop_until_success:error", n, o,
				function() {
					ee(o,
					function() {
						return o += 2e3,
						o > 2e4 && (o = 2e4),
						t()
					})
				})
			}),
			t()
		},
		c = Xn,
		F = Pn,
		Qn = Qn,
		on = on,
		ee = ee,
		rn = rn,
		Xn = Xn,
		I = I,
		en = en,
		ne = ne,
		Yn = Yn,
		s = s,
		Pn = Pn,
		Kn = Kn,
		r = r,
		c = c,
		F = F,
		Mn = Mn,
		Dn = Dn,
		Fn = Fn,
		Hn = Hn,
		Xn = function() {
			var t,
			n,
			e,
			r,
			i,
			o;
			if (1 === arguments.length) Xn("", arguments[0]);
			else {
				if (i = arguments[0], e = arguments[1], o = "undefined" != typeof window && null !== window ? window: global) for (r in e) he.call(e, r) && (n = e[r], o[i + r] = n);
				if (t = "undefined" != typeof module && null !== module ? module.exports: void 0) for (r in e) he.call(e, r) && (n = e[r], t[r.replace(/^_/, "")] = n)
			}
			return this
		}
	} (),
	e = t = n = null,
	X = tn = q = K = Q = nn = R = N = L = O = Y = E = G = W = z = V = j = H = J = Z = null,
	function() {
		function r(t) {
			var n,
			e,
			r,
			i,
			o;
			for (null == t && (t = []), e = {},
			r = [], e[U] = [], i = 0, o = t.length; o > i; i++) n = t[i],
			e[U][n] = [];
			return e[A] = [],
			e[P] = [],
			e
		}
		function i(t) {
			var n,
			e;
			return e = t[U],
			n = e.length,
			e[n] = [],
			[n, e[n]]
		}
		function o(t, n, e) {
			var r;
			return (null != (r = t[A])[n] ? (r = t[A])[n] : r[n] = []).push(e),
			e
		}
		function u(t, n, e) {
			return o(t, n, e),
			t[P][e](0),
			e
		}
		function a(t, n, e) {
			var r,
			i,
			o;
			return o = function() {
				var t;
				t = [];
				for (r in e) he.call(e, r) && (i = e[r], t.push([r, i]));
				return t
			} (),
			un(t, n, o)
		}
		function l(t, n, e) {
			var r,
			i,
			o;
			return o = function() {
				var t;
				t = [];
				for (r in e) he.call(e, r) && (i = e[r], t.push([r, i]));
				return t
			} (),
			sn(t, n, o)
		}
		function c(t) {
			var n;
			return n = function() {
				var n,
				e,
				r,
				i,
				o,
				u,
				a,
				l;
				if (arguments[2].length ? (r = arguments[0], l = arguments[1], a = arguments[2], i = arguments[3]) : (r = arguments[0], l = arguments[1], n = arguments[2], u = arguments[3], i = arguments[4], a = [[n, u]]), e = function() {
					var e,
					i,
					o,
					s;
					for (s = [], e = 0, i = a.length; i > e; e++) o = a[e],
					n = o[0],
					u = o[1],
					t(r, l, n, u),
					s.push(n);
					return s
				} (), o = {},
				null == i && (i = !0), i) for (n in e) ! o[n] && i && r[A][n] && l >= 0 && f(r, r[A][n], l),
				o[n] = !0;
				return e
			}
		}
		function f(t, n, e) {
			var r,
			i,
			o,
			u;
			if (i = t[P], "number" == typeof n) i[n].call(this, e);
			else for (o = 0, u = n.length; u > o; o++) r = n[o],
			f(t, r, e);
			return this
		}
		function h(t, n) {
			var e,
			r,
			i,
			o,
			u;
			if (r = t[U], "number" == typeof n) return r[n];
			for (u = [], i = 0, o = n.length; o > i; i++) e = n[i],
			r[e] || (r[e] = []),
			u.push(r[e]);
			return u
		}
		function d(t, n, e) {
			var r,
			i,
			o,
			u,
			a,
			l;
			for (r = j(t, e), u = {},
			o = a = 0, l = e.length; l > a; o = ++a) i = e[o],
			u[e[o]] = r[o][n];
			return u
		}
		function p(t, n) {
			var e,
			r,
			o,
			u,
			a;
			return u = t[U],
			o = t[P],
			a = i(t),
			e = a[0],
			r = a[1],
			o[e] = function(e) {
				return m(t, e,
				function(t) {
					return r[t] = n(t)
				})
			},
			e
		}
		function m(t, n, e) {
			var r,
			i,
			o,
			u;
			for (i = t[U], r = o = n, u = i[0].length; u >= n ? u > o: o > u; r = u >= n ? ++o: --o) e(r);
			return null
		}
		function g(t, n, e) {
			var r,
			o,
			u,
			a,
			l,
			s;
			return a = t[U],
			u = t[P],
			s = i(t),
			r = s[0],
			o = s[1],
			l = a[n],
			u[r] = function(t) {
				var n,
				r,
				i,
				u,
				a,
				s,
				c,
				f;
				for (r = l.length, i = l.slice(t - e, t), u = 0, s = 0, f = i.length; f > s; s++) a = i[s],
				u += a;
				for (n = c = t; r >= t ? r > c: c > r; n = r >= t ? ++c: --c) a = l[n],
				i.length >= e && (u -= i.shift()),
				u += a,
				i.push(a),
				o[n] = u / i.length;
				return this
			},
			r
		}
		function v(t, n, e) {
			var r,
			o,
			u,
			a,
			l,
			s;
			return a = t[U],
			u = t[P],
			s = i(t),
			r = s[0],
			o = s[1],
			l = a[n],
			u[r] = function(n) {
				return m(t, n,
				function(t) {
					var n,
					r,
					i;
					return n = l[t],
					r = null != (i = o[t - 1]) ? i: n,
					r = (2 * n + (e - 1) * r) / (e + 1),
					o[t] = r
				})
			},
			r
		}
		function y(t, n, e, r) {
			var o,
			u,
			a,
			l,
			s,
			c;
			return l = t[U],
			a = t[P],
			c = i(t),
			o = c[0],
			u = c[1],
			s = l[n],
			a[o] = function(n) {
				return m(t, n,
				function(t) {
					var n,
					i,
					o;
					return n = s[t],
					i = null != (o = u[t - 1]) ? o: n,
					i = (r * n + (e - r) * i) / e,
					u[t] = i
				})
			},
			o
		}
		function _(t, n, e) {
			var r,
			o,
			u,
			a,
			l;
			return a = t[U],
			u = t[P],
			l = i(t),
			r = l[0],
			o = l[1],
			u[r] = function(r) {
				return m(t, r,
				function(t) {
					var r,
					i;
					return i = Math.max(t - e, 0),
					r = t + 1,
					o[t] = Math.min.apply(Math, a[n].slice(i, r))
				})
			},
			r
		}
		function x(t, n, e) {
			var r,
			o,
			u,
			a,
			l;
			return a = t[U],
			u = t[P],
			l = i(t),
			r = l[0],
			o = l[1],
			u[r] = function(r) {
				return m(t, r,
				function(t) {
					var r,
					i;
					return i = Math.max(t - e, 0),
					r = t + 1,
					o[t] = Math.max.apply(Math, a[n].slice(i, r))
				})
			},
			r
		}
		function b(t, n, e, r, u) {
			function a(t) {
				return [t, C[t]]
			}
			var l,
			s,
			c,
			h,
			d,
			g,
			y,
			_,
			x,
			b,
			$,
			C,
			w,
			T,
			k,
			B,
			S;
			return null == e && (e = 12),
			null == r && (r = 26),
			null == u && (u = 9),
			C = t[U],
			x = t[P],
			w = a(v(t, n, e)),
			s = w[0],
			$ = w[1],
			T = a(v(t, n, r)),
			l = T[0],
			b = T[1],
			k = a(p(t,
			function(t) {
				return $[t] - b[t]
			})),
			h = k[0],
			_ = k[1],
			B = a(v(t, h, u)),
			c = B[0],
			y = B[1],
			S = i(t),
			d = S[0],
			g = S[1],
			x[d] = function(n) {
				return f(t, [s, l, h, c], n),
				m(t, n,
				function(t) {
					return g[t] = 2 * (_[t] - y[t])
				})
			},
			x[d](0),
			o(t, n, d),
			[h, c, d]
		}
		function $(t, n, e, r, u, a) {
			function l(t) {
				return z.push(t),
				[t, X[t]]
			}
			var s,
			c,
			h,
			d,
			m,
			v,
			b,
			$,
			C,
			w,
			T,
			k,
			B,
			S,
			M,
			D,
			F,
			A,
			I,
			R,
			N,
			E,
			L,
			O,
			G,
			Y,
			W,
			H,
			q,
			j,
			z,
			J,
			X,
			K,
			Q,
			V,
			Z,
			tn,
			nn,
			en,
			rn,
			on,
			un,
			an,
			ln,
			sn,
			cn,
			fn;
			return null == e && (e = 14),
			null == r && (r = 14),
			null == u && (u = 3),
			null == a && (a = 3),
			X = t[U],
			E = t[P],
			z = [],
			I = X[n],
			K = l(p(t,
			function(t) {
				var n;
				return null != (n = I[t - 1]) ? n: I[t]
			})),
			$ = K[0],
			G = K[1],
			rn = l(p(t,
			function(t) {
				return Math.max(I[t] - G[t], 0)
			})),
			s = rn[0],
			M = rn[1],
			on = l(p(t,
			function(t) {
				return Math.abs(I[t] - G[t])
			})),
			h = on[0],
			F = on[1],
			un = l(y(t, s, e, 1)),
			c = un[0],
			D = un[1],
			an = l(y(t, h, e, 1)),
			d = an[0],
			A = an[1],
			ln = l(p(t,
			function(t) {
				return 0 === A[t] ? 100: 100 * (D[t] / A[t])
			})),
			S = ln[0],
			J = ln[1],
			sn = l(_(t, S, r)),
			C = sn[0],
			Y = sn[1],
			cn = l(x(t, S, r)),
			v = cn[0],
			L = cn[1],
			fn = l(p(t,
			function(t) {
				return J[t] - Y[t]
			})),
			T = fn[0],
			H = fn[1],
			Q = l(p(t,
			function(t) {
				return L[t] - Y[t]
			})),
			B = Q[0],
			j = Q[1],
			V = l(g(t, T, u)),
			w = V[0],
			W = V[1],
			Z = l(g(t, B, u)),
			k = Z[0],
			q = Z[1],
			tn = l(p(t,
			function(t) {
				return 0 === q[t] ? 100: 100 * (W[t] / q[t])
			})),
			b = tn[0],
			O = tn[1],
			nn = l(g(t, b, a)),
			m = nn[0],
			N = nn[1],
			en = i(t),
			S = en[0],
			R = en[1],
			E[S] = function(n) {
				return f(t, z, n)
			},
			E[S](0),
			o(t, n, S),
			[b, m]
		}
		function C(t, n, e, r, u) {
			function a(t) {
				return I.push(t),
				[t, N[t]]
			}
			var l,
			s,
			c,
			h,
			d,
			m,
			g,
			v,
			b,
			$,
			C,
			w,
			T,
			k,
			B,
			S,
			M,
			D,
			F,
			A,
			I,
			R,
			N,
			E,
			L,
			O,
			G,
			Y,
			W,
			H;
			return h = n[0],
			b = n[1],
			l = n[2],
			null == e && (e = 9),
			null == r && (r = 3),
			null == u && (u = 3),
			N = t[U],
			T = t[P],
			I = [],
			A = N[b],
			C = N[l],
			B = N[h],
			E = a(_(t, b, e)),
			v = E[0],
			F = E[1],
			L = a(x(t, h, e)),
			c = L[0],
			k = L[1],
			O = a(p(t,
			function(t) {
				return k[t] - F[t] < 1e-8 ? 100: 100 * ((C[t] - F[t]) / (k[t] - F[t]))
			})),
			$ = O[0],
			R = O[1],
			G = a(y(t, $, r, 1)),
			m = G[0],
			M = G[1],
			Y = a(y(t, m, u, 1)),
			s = Y[0],
			w = Y[1],
			W = a(p(t,
			function(t) {
				return 3 * M[t] - 2 * w[t]
			})),
			d = W[0],
			S = W[1],
			H = i(t),
			g = H[0],
			D = H[1],
			T[g] = function(n) {
				return f(t, I, n)
			},
			T[g](0),
			o(t, h, g),
			o(t, b, g),
			o(t, l, g),
			[m, s, d]
		}
		function w(t, n) {
			var e,
			r,
			u,
			a,
			l,
			s,
			c,
			f,
			h,
			d,
			p,
			g,
			v,
			y;
			for (a = n[0], r = n[1], u = n[2], e = n[3], d = t[U], c = t[P], h = [], v = i(t), l = v[0], s = v[1], c[l] = function(n) {
				return m(t, n,
				function(t) {
					return s[t] = parseFloat(((d[r][t] + d[u][t] + d[e][t]) / 3).toFixed(8)),
					s[t]
				})
			},
			c[l](0), y = arguments[1], p = 0, g = y.length; g > p; p++) f = y[p],
			o(t, f, l);
			return [l]
		}
		function T(t, n) {
			var e,
			r,
			u,
			a,
			l,
			s,
			c,
			f,
			h,
			d,
			p,
			g,
			v,
			y;
			for (a = n[0], r = n[1], u = n[2], e = n[3], d = t[U], c = t[P], h = [], v = i(t), l = v[0], s = v[1], c[l] = function(n) {
				return m(t, n,
				function(t) {
					return s[t] = parseFloat(((d[r][t] + d[u][t]) / 2).toFixed(8)),
					s[t]
				})
			},
			c[l](0), y = arguments[1], p = 0, g = y.length; g > p; p++) f = y[p],
			o(t, f, l);
			return [l]
		}
		function k(t, n) {
			return u(t, n, g.apply(null, arguments))
		}
		function B(t, n) {
			return u(t, n, v.apply(null, arguments))
		}
		function S(t, n) {
			var e,
			r,
			o,
			u;
			return o = t[U],
			u = i(t),
			e = u[0],
			r = u[1],
			o[e] = n,
			e
		}
		function M() {
			var t,
			n,
			e,
			r,
			i,
			o,
			u,
			a;
			for (e = arguments[0], r = 3 <= arguments.length ? de.call(arguments, 1, i = arguments.length - 1) : (i = 1, []), n = arguments[i++], a = [], o = 0, u = n.length; u > o; o++) t = n[o],
			"object" == typeof t && t.length ? a.push(e.apply(null, de.call(r).concat(de.call(t)))) : a.push(e.apply(null, de.call(r).concat([t])));
			return a
		}
		function D() {
			return M.apply(null, [h].concat(de.call(arguments)))
		}
		function F(t, n, e, r) {
			var i;
			return i = h(t, r),
			i.slice(n, +e + 1 || 9e9)
		}
		var A,
		P,
		U,
		I,
		en,
		rn,
		on,
		un,
		an,
		ln,
		sn;
		return an = s(3),
		U = an[0],
		A = an[1],
		P = an[2],
		e = U,
		t = A,
		n = P,
		sn = c(en = function(t, n, e, r) {
			return t[U][e][n] = r
		}),
		rn = c(function(t, n, e) {
			return t[U][e].push(n)
		}),
		un = c(I = function(t, n, e, r) {
			return t[U][e].splice(n, 0, r)
		}),
		on = c(function(t, n, e) {
			return t[U][e].splice(n, 1)
		}),
		ln = sn,
		X = r,
		tn = sn,
		q = on,
		K = un,
		Q = a,
		nn = l,
		R = S,
		N = B,
		L = k,
		O = b,
		Y = $,
		E = C,
		G = T,
		W = w,
		z = d,
		V = ln,
		j = h,
		H = M,
		J = D,
		Z = F
	} (),
	fn = pn = dn = cn = hn = sn = un = an = ln = null,
	i = u = o = a = null,
	function() {
		function t(t, n) {
			return t[0] - n[0]
		}
		function n(t) {
			var n;
			return n = {
				group: t
			},
			e(n),
			n
		}
		function e(n) {
			return n[m] = new D({
				compare: t
			}),
			n[v] = new D({
				compare: t
			}),
			n[g] = new D({
				compare: t
			}),
			n[y] = new D({
				compare: t
			}),
			n
		}
		function r(t, n, e) {
			var r,
			i;
			return t[n].insert(e),
			e[b] ? (e = [parseInt(e[_] / t.group) * t.group, e[b]], i = n === v ? y: g, (r = t[i].find(e)) ? r[b] += e[b] : (r = e, t[i].insert(r))) : void 0
		}
		function l(t, n, e) {
			var r,
			i;
			if (e && (t[n]["delete"](e), e[b])) return e = [parseInt(e[_] / t.group) * t.group, e[b]],
			i = n === v ? y: g,
			r = t[i].find(e),
			r && (r[b] -= e[b], r[b] < 1e-12) ? t[i]["delete"](r) : void 0
		}
		function c(t, n) {
			var e,
			i,
			o,
			u,
			a,
			s,
			c,
			f,
			h,
			d,
			p;
			if (d = n.type_str, c = n.price_int, f = n.total_volume_int, i = n.now, h = "bid" === d ? v: m, a = t[h], p = parseInt(f), s = parseInt(c), o = [s, p, i], u = a.find([s]), l(t, h, u), p && r(t, h, o), h === v) for (; (e = t[m].get(0)) && e[_] <= s;) l(t, m, e);
			else for (; (e = t[v].get( - 1)) && e[_] >= s;) l(t, v, e);
			return t
		}
		function f(t, n) {
			var e,
			i,
			o,
			u,
			a,
			s,
			c,
			f;
			if (s = n[0], e = n[1], f = n[2], c = "bid" === f ? v: m, a = t[c], o = [s, e], u = a.find([s]), l(t, c, u), e && r(t, c, o), c === v) for (; (i = t[m].get(0)) && i[_] <= s;) l(t, m, i);
			else for (; (i = t[v].get( - 1)) && i[_] >= s;) l(t, v, i);
			return t
		}
		function h(t, n) {
			var e,
			r,
			i;
			for (e = 0; (i = t[m].get(0)) && i[_] < n;)++e,
			l(t, m, i);
			for (r = 0; (i = t[v].get( - 1)) && i[_] > n;)++r,
			l(t, v, i);
			return [e, r]
		}
		function d(t, n, e, r) {
			var i,
			o,
			u,
			a,
			s,
			c;
			for (i = 0, o = 0, s = 0, c = 0, u = 0; (a = t[m].at(u)) && a[_] <= e;) a[x] >= r ? (++u, ++s) : (++i, l(t, m, a));
			for (u = -1; (a = t[v].at(u)) && a[_] >= n;) a[x] >= r ? (--u, ++c) : (++o, l(t, v, a));
			return [i, o, s, c]
		}
		function p(t) {
			var n,
			e,
			r,
			i;
			return n = t[m],
			r = t[v],
			e = n.slice( - 11, -1),
			i = r.slice(0, 10)
		}
		var m,
		g,
		v,
		y,
		_,
		x,
		b,
		$,
		C;
		return $ = s(4),
		v = $[0],
		m = $[1],
		y = $[2],
		g = $[3],
		C = [0, 1, 2],
		_ = C[0],
		b = C[1],
		x = C[2],
		fn = n,
		pn = c,
		dn = f,
		cn = p,
		hn = r,
		sn = l,
		un = h,
		an = d,
		ln = e,
		i = m,
		u = v,
		o = g,
		a = y
	} (),
	Tn = Bn = kn = Cn = $n = Sn = wn = null,
	mn = gn = null,
	yn = vn = xn = bn = _n = null,
	function() {
		function t(t, n, r, i, o, u) {
			var a,
			l,
			s;
			return s = le(n, i, o),
			a = s[0],
			l = s[1],
			l > r ? e(t, a, r, u, l - r) : e(t, a, l, u, r - l)
		}
		function n(t, n, r, i, o, u) {
			var a,
			l,
			s;
			return a = se(n, r),
			l = ce(n, i),
			s = ce(n, o),
			e(t, a, s, u, l - s)
		}
		function e(t, n, e, r, i) {
			return 0 > i && (e += i, i = -i),
			0 === i && (i = 1),
			t.fillStyle === t.strokeStyle ? t.fillRect(n, e, r, i) : i > 1 ? (t.fillRect(n, e, r, i), t.strokeRect(n + .5, e + .5, r - 1, i - 1)) : 1 === i ? (t.beginPath(), t.moveTo(n, e + .5), t.lineTo(n + r, e + .5), t.stroke()) : void 0
		}
		function r(t, n, e, r) {
			var i,
			o,
			u,
			a,
			l,
			s,
			c;
			for (t.beginPath(), u = l = 0, s = e.length; s > l; u = ++l) a = e[u],
			c = le(n, u, a),
			i = c[0],
			o = c[1],
			r && (i += r),
			u ? t.lineTo(i, o) : t.moveTo(i, o);
			return t.stroke()
		}
		function i(t, n, e, r, i, o) {
			var u,
			a,
			l;
			return u = se(n, e),
			a = ce(n, r),
			l = ce(n, i),
			o && (u += o),
			t.beginPath(),
			t.moveTo(u + .5, l),
			t.lineTo(u + .5, a),
			t.stroke()
		}
		function o(t, n, e, r) {
			return t.beginPath(),
			t.moveTo(e, n),
			t.lineTo(r, n),
			t.stroke()
		}
		function u(t, n, e, r) {
			return t.beginPath(),
			t.moveTo(n, e),
			t.lineTo(n, r),
			t.stroke()
		}
		function a(t, n, e) {
			var r,
			i,
			u,
			a,
			l,
			s,
			c,
			f;
			for (r = en(n[A]), a = en(n[P]), n = fe(r, a), s = e(r, a), c = 0, f = s.length; f > c; c++) l = s[c],
			u = ce(n, l),
			i = r.w,
			t.fillText(l, i - 8, u + .5),
			o(t, u + .5, r.w - 4, r.w);
			return null
		}
		function l(t, n) {
			return a(t, n,
			function(t, n) {
				var e,
				r,
				i,
				o,
				u,
				a,
				l;
				for (r = Math.floor(t.h / 32), u = n.h / r, o = n.y, l = [], e = a = 0; r >= 0 ? r >= a: a >= r; e = r >= 0 ? ++a: --a) i = o + e * u,
				l.push(parseFloat(i.toPrecision(5)));
				return l
			})
		}
		function s(t, n) {
			return a(t, n,
			function(t, n) {
				var e,
				r,
				i,
				o,
				u,
				a,
				l,
				s,
				c;
				for (i = Math.abs(t.h / 32), a = n.h / i, c = function() {
					var t,
					n,
					i,
					o;
					for (i = [1, 2, 5], o = [], t = 0, n = i.length; n > t; t++) e = i[t],
					r = a / e,
					s = Math.ceil(Math.log(r) / Math.log(10)).toFixed(2),
					s = Math.pow(10, s),
					s = e * s,
					o.push(s);
					return o
				} (), l = Math.min.apply(Math, c), o = Math.ceil(n.y / l) * l, u = []; o < n.y + n.h;) u.push(parseFloat(o.toPrecision(5))),
				o += l;
				return u
			}),
			null
		}
		function c(t, n, e, r) {
			var i,
			u,
			a,
			l,
			s,
			c,
			f,
			h;
			for (i = en(n[A]), l = en(n[P]), n = fe(i, l, n[U]), c = r(i, l), t.textAlign = "center", f = 0, h = c.length; h > f; f++) s = c[f],
			a = ce(n, s),
			u = i.x,
			e && "text" !== e || t.fillText(s, u + 50, a + .5),
			e && "hr" !== e || (o(t, a + .5, u, u + 6), o(t, a + .5, u + i.w - 6, u + i.w));
			return t.textAlign = "left",
			null
		}
		function f(t, n) {
			return c(t, n, null,
			function(t, n) {
				var e,
				r,
				i,
				o,
				u,
				a,
				l;
				for (r = Math.floor(t.h / 32), u = n.h / r, o = n.y, l = [], e = a = 0; r >= 0 ? r >= a: a >= r; e = r >= 0 ? ++a: --a) i = o + e * u,
				l.push(parseFloat(i.toPrecision(5)));
				return l
			})
		}
		function h(t, n, e) {
			return c(t, n, null,
			function() {
				return e
			})
		}
		function d(t, n, e) {
			return c(t, n, e,
			function(t, n) {
				var e,
				r,
				i,
				o,
				u,
				a,
				l,
				s,
				c;
				for (i = Math.abs(t.h / 32), a = n.h / i, c = function() {
					var t,
					n,
					i,
					o;
					for (i = [1, 2, 5], o = [], t = 0, n = i.length; n > t; t++) e = i[t],
					r = a / e,
					s = Math.ceil(Math.log(r) / Math.log(10)).toFixed(2),
					s = Math.pow(10, s),
					s = e * s,
					o.push(s);
					return o
				} (), l = Math.min.apply(Math, c), o = Math.ceil(n.y / l) * l, u = []; o < n.y + n.h;) u.push(parseFloat(o.toPrecision(5))),
				o += l;
				return u
			}),
			null
		}
		function p(t, n) {
			var e;
			return t.save(),
			t.beginPath(),
			e = en(n[A]),
			e.y += 8,
			e.h -= 16,
			t.moveTo(e.x, e.y),
			t.lineTo(e.x + e.w, e.y),
			t.lineTo(e.x + e.w, e.y + e.h),
			t.lineTo(e.x, e.y + e.h),
			t.clip()
		}
		function m(t, n, e) {
			return p(t, n),
			e(),
			t.restore()
		}
		return Tn = r,
		Bn = t,
		kn = n,
		Cn = e,
		$n = o,
		Sn = i,
		wn = u,
		mn = l,
		gn = s,
		yn = f,
		vn = d,
		xn = p,
		bn = m,
		_n = h
	} (),
	D = null,
	function() {
		var t;
		return t = function() {
			function t(t) {
				this.options = null != t ? t: {},
				this.id = ++o,
				this.min = 0,
				this.max = 0,
				this.count = 0,
				this.type = i,
				this.total = 0,
				this.parent = null,
				this.children = [],
				this.next = null,
				this.prev = null,
				this.compare = this.options.compare,
				this.multimap = this.options.multimap,
				null == this.compare && (this.compare = function(t, n) {
					return t - n
				})
			}
			var n,
			e,
			r,
			i,
			o;
			return n = 8,
			e = n << 1,
			r = 0,
			i = 1,
			o = 0,
			t.prototype.insert_value_ = function(t) {
				var n,
				e,
				r,
				i,
				o,
				u,
				a;
				for (e = this.count, n = this.children, r = a = 0; e >= 0 ? e > a: a > e; r = e >= 0 ? ++a: --a) {
					if (u = n[r], o = this.compare(u, t), 0 === o) {
						if (this.multimap) break;
						return
					}
					if (o > 0) break
				}
				if (0 === r) for (this.min = t, i = this; (i = i.parent) && this.compare(i.min, t) > 0;) i.min = t;
				if (r === e) for (this.max = t, i = this; (i = i.parent) && this.compare(i.max, t) < 0;) i.max = t;
				for (this.children.splice(r, 0, t), this.count += 1, i = this; i;) i.total += 1,
				i = i.parent;
				return this.rebuild_(),
				this
			},
			t.prototype.insert_node_ = function(t, n) {
				var e,
				r,
				i;
				for (e = this.count, r = i = 0; (e >= 0 ? e > i: i > e) && this.children[r].min !== t; r = e >= 0 ? ++i: --i);
				return n.parent = this,
				this.count += 1,
				this.children.splice(r + 1, 0, n),
				this.rebuild_()
			},
			t.prototype.find_node_ = function(t) {
				var n,
				e,
				i,
				o,
				u;
				for (o = this; o.type === r;) {
					if (n = o.children, e = o.count, this.compare(t, n[0].min) <= 0) i = 0;
					else if (this.compare(t, n[e - 1].max) >= 0) i = e - 1;
					else for (i = u = 0; (e >= 0 ? e > u: u > e) && !(this.compare(n[i].max, t) >= 0); i = e >= 0 ? ++u: --u);
					o = n[i]
				}
				return o
			},
			t.prototype.has = function(t) {
				var n;
				return n = this.find_node_(t),
				-1 !== n.children.indexOf(t)
			},
			t.prototype.replace_value = function(t) {
				var n,
				e,
				r,
				i,
				o,
				u;
				for (r = this.find_node_(t), n = r.children, e = o = 0, u = n.length; u > o; e = ++o) i = n[e],
				0 === this.compare(i, t) && (n[e] = t);
				return this
			},
			t.prototype.get_node_ = function(t) {
				var n,
				e,
				i,
				o,
				u;
				if (i = this, t >= this.total) return [null, null];
				if (0 > t) return [null, null];
				for (; i.type === r;) for (e = i.children, o = 0, u = e.length; u > o; o++) {
					if (n = e[o], !(t >= n.total)) {
						i = n;
						break
					}
					t -= n.total
				}
				return [i, t]
			},
			t.prototype.set_min_ = function(t) {
				var n,
				e;
				for (e = this, n = this.min; e && 0 === this.compare(e.min, n);) e.min = t,
				e = e.parent;
				return this
			},
			t.prototype.set_max_ = function(t) {
				var n,
				e;
				for (e = this, n = this.max; e && 0 === this.compare(e.max, n);) e.max = t,
				e = e.parent;
				return this
			},
			t.prototype.inc_total_ = function() {
				var t;
				for (t = this; t;) t.total += 1,
				t = t.parent;
				return this
			},
			t.prototype.dec_total_ = function() {
				var t;
				for (t = this; t;) t.total -= 1,
				t = t.parent;
				return this
			},
			t.prototype.clean_node_ = function() {
				var t,
				n;
				return this.parent ? (this.parent.delete_node_(this), this.type === i ? (null != (t = this.prev) && (t.next = this.next), null != (n = this.next) ? n.prev = this.prev: void 0) : void 0) : this.type = i
			},
			t.prototype.delete_node_ = function(t) {
				var n;
				return n = this.children.indexOf(t),
				this.children.splice(n, 1),
				this.count -= 1,
				0 === this.count ? this.clean_node_() : (0 === n && this.set_min_(this.children[0].min), n === this.count ? this.set_max_(this.children[this.count - 1].max) : void 0)
			},
			t.prototype.delete_value_ = function(t) {
				var n,
				e;
				return n = this.children,
				e = this.indexOf_(t),
				-1 !== e && (n.splice(e, 1), this.count -= 1, this.dec_total_(), 0 === this.count ? this.clean_node_() : (0 === e && this.set_min_(n[0]), e === this.count && this.set_max_(n[this.count - 1]))),
				this
			},
			t.prototype.rebuild_ = function() {
				var t,
				o,
				u;
				if (! (this.count < e)) return null != this.parent ? (o = this.slice_(n, e - 1), o.parent = this.parent, this.count = n, this.total = this.total - o.total, this.children.splice(n, n), this.max = this.type === i ? this.children[n - 1] : this.children[n - 1].max, this.parent.insert_node_(this.min, o), this.type === i && (this.next && (this.next.prev = o), o.next = this.next, this.next = o)) : (t = this.slice_(0, n - 1), u = this.slice_(n, e - 1), t.parent = this, u.parent = this, t.next = u, u.prev = t, this.count = 2, this.children = [t, u], this.type = r),
				this
			},
			t.prototype.slice_ = function(n, e) {
				var r,
				o,
				u,
				a,
				l,
				s,
				c,
				f;
				if (u = e - n + 1, a = new t(this.options), a.count = u, a.type = this.type, o = this.children, this.type === i) a.min = o[n],
				a.max = o[e],
				a.children = o.slice(n, +e + 1 || 9e9),
				a.total = u;
				else {
					for (a.min = o[n].min, a.max = o[e].max, a.children = o.slice(n, +e + 1 || 9e9), l = 0, f = a.children, s = 0, c = f.length; c > s; s++) r = f[s],
					r.parent = a,
					l += r.total;
					a.total = l
				}
				return a
			},
			t.prototype.atom = function() {
				var t;
				for (t = this; t.type === r;) t = t.children[0];
				return t
			},
			t.prototype.indexOf_ = function(t) {
				var n,
				e,
				r,
				i,
				o,
				u;
				for (u = this.children, n = i = 0, o = u.length; o > i; n = ++i) {
					if (r = u[n], e = this.compare(r, t), 0 === e) return n;
					if (e > 0) return - 1
				}
				return - 1
			},
			t.prototype.insert = function(t) {
				var n;
				return n = this.find_node_(t),
				n.insert_value_(t),
				this
			},
			t.prototype["delete"] = function(t) {
				var n;
				return n = this.find_node_(t),
				n.delete_value_(t)
			},
			t.prototype.replace = function(t) {
				return this["delete"](t),
				this.insert(t)
			},
			t.prototype.get = function(t) {
				var n,
				e,
				r;
				return 0 > t && (t += this.size()),
				r = this.get_node_(t),
				n = r[0],
				e = r[1],
				n ? n.children[e] : null
			},
			t.prototype.at = function(t) {
				var n,
				e,
				r;
				return 0 > t && (t += this.size()),
				r = this.get_node_(t),
				n = r[0],
				e = r[1],
				n ? n.children[e] : null
			},
			t.prototype.find = function(t) {
				return this.find_all(t)[0]
			},
			t.prototype.find_all = function(t) {
				var n,
				e,
				r,
				i,
				o,
				u,
				a;
				if (i = [], n = this.find_node_(t), this.compare(t, n.min) < 0) return [];
				if (this.compare(t, n.max) > 0) return [];
				for (a = n.children, o = 0, u = a.length; u > o; o++) if (r = a[o], e = this.compare(r, t), 0 === e) i.push(r);
				else if (e > 0) break;
				return i
			},
			t.prototype.slice = function(t, n) {
				var e,
				r,
				i,
				o,
				u;
				if (null == n && (n = this.total - 1), 0 > t && (t += this.total), 0 > n && (n += this.total), 0 > t && (t = 0), n >= this.total && (n = this.total - 1), u = this.get_node_(t), r = u[0], o = u[1], !r) return [];
				for (i = n - t + 1, e = []; i && r;) o < r.count ? (e.push(r.children[o++]), --i) : (r = r.next, o = 0);
				return e
			},
			t.prototype.flatten = function() {
				var t,
				n,
				e,
				r,
				i,
				o;
				for (r = [], i = this.atom(); i;) {
					for (n = i.count, t = i.children, e = o = 0; n >= 0 ? n > o: o > n; e = n >= 0 ? ++o: --o) r.push(t[e]);
					i = i.next
				}
				return r
			},
			t.prototype.dump = function(t) {
				var n,
				e,
				r,
				o,
				u,
				a,
				l;
				for (null == t && (t = 0), r = process.stdout, n = o = 0, l = this.count; l >= 0 ? l > o: o > l; n = l >= 0 ? ++o: --o) if (this.type === i) {
					for (e = u = 0; t >= 0 ? t > u: u > t; e = t >= 0 ? ++u: --u) r.write(" ");
					r.write(this.children[n] + " ")
				} else this.children[n].dump(t + 1);
				for (e = a = 0; t >= 0 ? t > a: a > t; e = t >= 0 ? ++a: --a) r.write(" ");
				return r.write("min: " + this.min + " max: " + this.max + " count: " + this.count + "/" + this.total + "\n"),
				this
			},
			t.prototype.delete_if = function() {},
			t.prototype.size = function() {
				return this.total
			},
			t
		} (),
		D = t,
		null != Xn && (D = D),
		"undefined" != typeof module && null !== module ? module.exports = D: void 0
	} (),
	Nn = En = Ln = Un = In = Rn = On = Gn = null,
	l = null,
	An = null,
	function() {
		function t(t) {
			var n;
			return n = t.getHours()
		}
		function n(t) {
			var n;
			return n = t.getMinutes(),
			"" + n + "min"
		}
		function e(t) {
			return s[t.getMonth()]
		}
		function r(t) {
			var n,
			e;
			return e = t.getMonth(),
			n = t.getDate(),
			"" + s[e] + " " + n
		}
		function i(t) {
			return t.getHours() + ":" + t.getMinutes()
		}
		function o(t) {
			return An(t.getHours()) + ":" + An(t.getMinutes()) + ":" + An(t.getSeconds())
		}
		function u(t) {
			var n,
			e,
			r,
			i,
			o;
			return n = t.getFullYear(),
			o = An(t.getMonth() + 1),
			e = An(t.getDate()),
			r = An(t.getHours()),
			i = An(t.getMinutes()),
			"" + n + "-" + o + "-" + e + " " + r + ":" + i
		}
		function a(t) {
			var n,
			e,
			r,
			i,
			o,
			u,
			a,
			l;
			return e = t.getFullYear(),
			u = t.getMonth() + 1,
			r = t.getDate(),
			i = An(t.getHours()),
			o = An(t.getMinutes()),
			a = An(t.getSeconds()),
			l = c[t.getDay()],
			n = s[t.getMonth()],
			"" + l + ", " + r + " " + n + " " + i + ":" + o + ":" + a
		}
		var s,
		c;
		return s = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
		c = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
		An = function(t) {
			return t = t.toString(),
			1 === t.length ? "0" + t: t
		},
		Nn = t,
		En = n,
		Ln = e,
		Un = r,
		In = u,
		Rn = a,
		On = i,
		Gn = o,
		l = c,
		An = An
	} (),
	zn = Jn = qn = jn = null,
	function() {
		function t(n, e) {
			var r;
			return n[0] && n[0].length ? (n = function() {
				var i,
				o,
				u;
				for (u = [], i = 0, o = n.length; o > i; i++) r = n[i],
				u.push(t(r, e));
				return u
			} (), t(n, e)) : e.apply(null, n)
		}
		function n(n) {
			return t(n, Math.max)
		}
		function e(n) {
			return t(n, Math.min)
		}
		function r(t) {
			var e,
			r;
			return r = function() {
				var n,
				i,
				o;
				for (o = [], n = 0, i = t.length; i > n; n++) r = t[n],
				o.push(function() {
					var t,
					n,
					i;
					for (i = [], t = 0, n = r.length; n > t; t++) e = r[t],
					i.push(Math.abs(e));
					return i
				} ());
				return o
			} (),
			n(r)
		}
		return zn = Jn = qn = null,
		zn = n,
		Jn = e,
		qn = r,
		jn = t
	} (),
	f = v = x = null,
	b = m = v = _ = h = g = y = C = d = p = null,
	te = Vn = Zn = null,
	function() {
		function t() {
			var t,
			n;
			return n = {},
			t = X(a),
			n[i] = t,
			n[D] = 0,
			n
		}
		function n(t, n) {
			var e,
			s,
			f,
			h,
			d,
			p,
			m,
			g,
			v,
			y,
			_,
			x;
			if (e = t[i], n = en(n), n[B] = n[B] - n[B] % t[D], y = r(t, n[B]), f = y[0], h = y[1], f) return d = z(e, h, a),
			d[l] > n[S] && (d[M] = n[k], d[l] = n[S]),
			d[$] < n[S] && (d[o] = n[k], d[$] = n[S]),
			d[c] < n[k] && (d[c] = n[k]),
			d[T] > n[k] && (d[T] = n[k]),
			d[A] += n[w],
			nn(e, h, d);
			for (d = {},
			d[F] = n[B], _ = [l, $], p = 0, g = _.length; g > p; p++) s = _[p],
			d[s] = n[S];
			for (x = [M, o, c, T], m = 0, v = x.length; v > m; m++) s = x[m],
			d[s] = n[k];
			return d[A] = n[w],
			d[u] = new Date(1e3 * d[F]),
			Q(e, h, d)
		}
		function e(n, e) {
			var r,
			a,
			s,
			f,
			h,
			d,
			p,
			m,
			g,
			v,
			y,
			_,
			x;
			for (s = t(), r = s[i], f = d = 0, g = e.length; g > d; f = ++d) {
				for (h = e[f], h = en(h), h[F] = parseInt(h[F]), _ = [M, o, c, T], p = 0, v = _.length; v > p; p++) a = _[p],
				h[a] = parseFloat(h[a]);
				for (x = [F, l, $], m = 0, y = x.length; y > m; m++) a = x[m],
				h[a] = parseInt(h[a]);
				h[A] = parseFloat(h[A]),
				h[u] = new Date(1e3 * h[F]),
				Q(r, f, h)
			}
			return s[D] = parseInt(n),
			s
		}
		function r(t, n) {
			var e,
			r,
			o;
			if (e = t[i], !(o = j(e, F))) return [!1, 0];
			for (r = o.length; r--;) if (! (o[r] > n)) {
				if (o[r] < n) break;
				return [!0, r]
			}
			return [!1, r + 1]
		}
		var i,
		o,
		u,
		a,
		l,
		c,
		$,
		T,
		M,
		D,
		F,
		A,
		P,
		U;
		return P = s(3),
		i = P[0],
		$ = P[1],
		D = P[2],
		f = i,
		v = $,
		x = D,
		U = [0, 1, 2, 3, 4, 5, 6, 7, 8],
		F = U[0],
		l = U[1],
		$ = U[2],
		M = U[3],
		o = U[4],
		c = U[5],
		T = U[6],
		A = U[7],
		u = U[8],
		a = U,
		b = F,
		m = l,
		v = $,
		_ = M,
		h = o,
		g = c,
		y = T,
		C = A,
		d = u,
		p = a,
		te = t,
		Vn = n,
		Zn = e
	} (),
	S = k = w = B = T = M = null,
	ie = re = null,
	function() {
		function t(t) {
			var n;
			return n = {},
			n[u] = parseInt(t.tid),
			n[i] = parseFloat(t.price),
			n[e] = parseFloat(t.amount),
			n[o] = parseInt(t.date),
			n[r] = Date.now(),
			n[a] = t.trade_type,
			n
		}
		function n(t) {
			var n;
			return n = {},
			n[u] = parseInt(t.tid),
			n[i] = parseFloat(t.price),
			n[e] = parseFloat(t.amount),
			n[o] = parseInt(t.date),
			n[r] = Date.now(),
			n[a] = t.trade_type,
			n
		}
		var e,
		r,
		i,
		o,
		u,
		a,
		l;
		return l = s(7),
		u = l[0],
		i = l[1],
		e = l[2],
		o = l[3],
		r = l[4],
		a = l[5],
		S = u,
		k = i,
		w = e,
		B = o,
		T = r,
		M = a,
		ie = t,
		re = n
	} (),
	fe = ue = ae = oe = se = ce = le = null,
	A = P = U = null,
	function() {
		return function() {
			function t(t, n, e) {
				var r;
				return null == e && (e = !1),
				r = [],
				r[c] = en(t),
				r[f] = en(n),
				r[h] = e,
				r
			}
			function n(t, n) {
				var e,
				r;
				return e = t[c],
				r = t[f],
				(n - r.x) / r.w * e.w + e.x
			}
			function e(t, n) {
				var e,
				r,
				i,
				o,
				u,
				a;
				return e = t[c],
				r = t[f],
				t[h] ? (a = r.y, u = r.y + r.h, o = 0, i = Math.log(u / a), n = Math.log(n / a), (n - o) / i * e.h + e.y) : (n - r.y) / r.h * e.h + e.y
			}
			function r(t, e) {
				return Math.round(n(t, e))
			}
			function i(t, n) {
				return Math.round(e(t, n))
			}
			function o(t, n, e) {
				return [r(t, n), i(t, e)]
			}
			function u(t, e) {
				return Math.round(n(t, e)) + .5
			}
			function a(t, n) {
				return Math.round(e(t, n)) + .5
			}
			function l(t, n, e) {
				return [u(t, n), a(t, e)]
			}
			var c,
			f,
			h,
			d;
			return d = s(3),
			c = d[0],
			f = d[1],
			h = d[2],
			fe = t,
			ue = u,
			ae = a,
			oe = l,
			se = r,
			ce = i,
			le = o,
			A = c,
			P = f,
			U = h
		} ()
	} (),
	function() {
		$(function() {
			return $(".symbol_" + window.$symbol).addClass("active"),
			function() {
				var t,
				n,
				e;
				return t = [],
				n = {},
				e = 0,
				function() {
					function t() {
						Pn("http://" + $host + ":8080/ticker?sid=" + $sid,
						function() {
							if (n = arguments[0], c = arguments[1], null != c) {
								a = c.now,
								e = Date.now();
								for (i in c) he.call(c, i) && (r = c[i], l = $("#market_" + i), s = parseFloat(l.text()), o = parseFloat(r.last), u = -1 !== i.indexOf("cny") ? "<span class=eprice>" + (o / $c_usdcny).toFixed(2) + "/</span>" + o: o.toString(), l.html(u), i === window.$symbol && (l = $("#change")[0], l.changed_at > a - r.date && (l.changed_at = a - r.date), a - r.date > 30 ? $("#bw_to_mt").attr("class", "bad") : a - r.date > 15 ? $("#bw_to_mt").attr("class", "normal") : $("#bw_to_mt").attr("class", "good")), a - r.date > 60 ? $(".symbol_" + i).addClass("grey") : $(".symbol_" + i).removeClass("grey"))
							}
							ee(1e4,
							function(n) {
								t(f.push(n))
							})
						})
					}
					var n,
					r,
					i,
					o,
					u,
					a,
					l,
					s,
					c,
					f;
					f = [],
					t()
				} (),
				function() {
					var t;
					ee(3e3,
					function() {
						function n() {
							t = Date.now() - e,
							t > 3e4 ? $("#pc_to_bw").attr("class", "bad") : t > 15e3 ? $("#pc_to_bw").attr("class", "normal") : $("#pc_to_bw").attr("class", "good"),
							ee(1e3,
							function(t) {
								n(r.push(t))
							})
						}
						var r;
						r = [],
						n()
					})
				} (),
				null
			} ()
		})
	} (),
	function() {
		return window.$theme_dark = {
			Background: "#0A0A0A",
			"Background Mask": "rgba(10, 10, 10, 0.8)",
			"Main Text": "#CCC",
			"Minor Text": "#333",
			"Highlight Text": "#FF0",
			Border: "#333",
			Link: "#36F",
			"Activated Link": "#F63",
			"Green Stroke": "#49C043",
			"Green Fill": "#39A033",
			"Red Stroke": "#CC1414",
			"Red Fill": "#990F0F",
			"Axis Background": "rgba(10, 10, 10, 0.8)",
			"Axis Key Text": "#FFFFFF",
			"Axis Text": "#999",
			"Green Arrow": "rgba(0,204,0,0.6)",
			"Red Arrow": "rgba(204,0,0,0.6)",
			"Arrow Text": "rgba(255,255,0,0.8)",
			Cross: "rgba(255,255,255,0.4)",
			"Stick Line": "#CCCC00",
			Colors: ["#A6CEE3", "#FDBF6F", "#DF8ADF", "#1F78B4", "#B2DF8A", "#FB9A99"],
			"Green Area": "rgba(64,255,64,0.3)",
			"Red Area": "rgba(255,64,64,0.3)",
			"Minor Arrow": "#999"
		},
		window.$theme_light = {
			Background: "#FFFFFF",
			"Background Mask": "rgba(255, 255, 255, 0.8)",
			"Main Text": "#333",
			"Minor Text": "#CCC",
			"Highlight Text": "#000",
			Border: "#CCC",
			Link: "#0D86FF",
			"Activated Link": "#F80",
			"Green Stroke": "#33A02C",
			"Green Fill": "#33A02C",
			"Red Stroke": "#E31A1C",
			"Red Fill": "#E31A1C",
			"Axis Background": "rgba(255, 255, 255, 0.8)",
			"Axis Key Text": "#333",
			"Axis Text": "#666",
			"Green Arrow": "rgba(51,160,44,0.8)",
			"Red Arrow": "rgba(227,26,28,0.8)",
			"Arrow Text": "#000",
			Cross: "rgba(0,0,0,0.4)",
			"Stick Line": "#0088CC",
			Colors: ["#24B324", "#D58E31", "#DF8ADF", "#822B82", "#B2DF8A", "#FB9A99"],
			"Green Area": "rgba(64,255,64,0.2)",
			"Red Area": "rgba(255,64,64,0.2)",
			"Minor Arrow": "#999"
		}
	} (),
	function() {
		var t,
		n,
		e,
		r,
		i,
		o;
		$(function() {
			function u() {
				ee(6e4,
				function() {
					Pn("http://" + $host + ":8080/difficulty?coin_name=" + t,
					function() {
						e = arguments[0],
						n = arguments[1],
						!e && (null != n ? n.ok: void 0) ? (r.text(n.difficulty), o.text(n.hash_rate_504), u(i.text(n.estimated))) : u()
					})
				})
			}
			t = -1 !== $symbol.indexOf("ltc") ? "litecoin": "bitcoin",
			r = $("#slot_difficulty"),
			i = $("#slot_estimated"),
			o = $("#slot_hash_rate"),
			u()
		})
	} (),
	Wn = null,
	function() {
		var t,
		n,
		e,
		r,
		l,
		c,
		m,
		x,
		b,
		D,
		F,
		R,
		W,
		H,
		q,
		J,
		X,
		K,
		Q,
		V,
		tn,
		nn,
		en,
		on,
		an,
		sn,
		cn,
		hn,
		pn,
		mn,
		gn,
		xn,
		Mn,
		Dn,
		Fn,
		An,
		En,
		Hn,
		jn,
		Xn,
		Kn,
		Qn,
		te,
		oe,
		ue,
		ae,
		pe,
		me,
		ge,
		ve,
		ye,
		_e,
		xe,
		be,
		$e,
		Ce,
		we,
		Te,
		ke,
		Be,
		Se,
		Me,
		De,
		Fe,
		Ae,
		Pe,
		Ue,
		Ie,
		Re,
		Ne,
		Ee,
		Le,
		Oe,
		Ge,
		Ye,
		We,
		He,
		qe,
		je,
		ze,
		Je,
		Xe,
		Ke,
		Qe,
		Ve,
		Ze,
		tr,
		nr,
		er,
		rr,
		ir,
		or,
		ur,
		ar,
		lr,
		sr,
		cr,
		fr,
		hr,
		dr,
		pr,
		mr,
		gr,
		vr,
		yr,
		_r,
		xr,
		br,
		$r,
		Cr,
		wr,
		Tr,
		kr,
		Br,
		Sr,
		Mr,
		Dr,
		Fr,
		Ar,
		Pr,
		Ur,
		Ir,
		Rr,
		Nr,
		Er,
		Lr,
		Or,
		Gr,
		Yr,
		Wr,
		Hr,
		qr;
		$(function() {
			function jr(t, n, e) {
				var r;
				return null == e && (e = {}),
				r = "session" === e.mode ? {
					path: "/"
				}: {
					expires: 3650,
					path: "/"
				},
				$.cookie(t, n, r)
			}
			function zr(t, n) {
				return t > n
			}
			function Jr(t) {
				switch (t) {
				case "mtgoxbtcusd":
					return ["Mt.Gox", "BTCUSD", "USD", " USD/BTC"];
				case "mtgoxbtceur":
					return ["Mt.Gox", "BTCEUR", "EUR", " EUR/BTC"];
				case "mtgoxbtcgbp":
					return ["Mt.Gox", "BTCGBP", "GBP", " GBP/BTC"];
				case "mtgoxbtcaud":
					return ["Mt.Gox", "BTCAUD", "AUD", " AUD/BTC"];
				case "mtgoxbtcjpy":
					return ["Mt.Gox", "BTCJPY", "JPY", " JPY/BTC"];
				case "bitstampbtcusd":
					return ["Bitstamp", "BTCUSD", "USD", " USD/BTC"];
				case "btceltcusd":
					return ["BTC-e", "LTCUSD", "USD", " USD/LTC"];
				case "btcebtcusd":
					return ["BTC-e", "BTCUSD", "USD", " USD/BTC"];
				case "btceltcbtc":
					return ["BTC-e", "LTCBTC", "BTC", " BTC/LTC"];
				case "btceppcbtc":
					return ["BTC-e", "PPCBTC", "BTC", " BTC/PPC"];
				case "btcenmcbtc":
					return ["BTC-e", "NMCBTC", "BTC", " BTC/NMC"];
				case "btcexpmbtc":
					return ["BTC-e", "XPMBTC", "BTC", " BTC/XPM"];
				case "btcchinabtccny":
					return ["BTCChina", "BTCCNY", "CNY", " CNY/BTC"];
				case "cryptotradeltcusd":
					return ["Crypto-Trade", "LTCUSD", "USD", " USD/LTC"];
				case "cryptotradebtcusd":
					return ["Crypto-Trade", "BTCUSD", "USD", " USD/BTC"];
				case "cryptotradeltcbtc":
					return ["Crypto-Trade", "LTCBTC", "BTC", " BTC/LTC"];
				case "f796btcusd":
					return ["796", "BTCUSD", "USD", " USD/BTC"];
				case "campbxbtcusd":
					return ["CampBX", "BTCUSD", "USD", " USD/BTC"];
				case "krakenbtcusd":
					return ["Kraken", "BTCUSD", "USD", " USD/BTC"];
				case "krakenbtceur":
					return ["Kraken", "BTCEUR", "BTC", " EUR/BTC"];
				case "f796xchange":
					return ["796", "XChange", "BTC", " BTC"];
				case "btctlabcoin":
					return ["BTC-TC", "LABCOIN", "BTC", " BTC"];
				case "btctasicminerpt":
					return ["BTC-TC", "ASICMINER-PT", "BTC", " BTC"];
				case "btctasicminerpt":
					return ["BTC-TC", "ASICMINER-PT", "BTC", " BTC"];
				case "cavirtexbtccad":
					return ["Cavirtex", "BTCCAD", "CAD", " CAD/BTC"];
				case "btctradebtccny":
					return ["BTCTrade", "BTCCNY", "CNY", " CNY/BTC"];
				case "okcoinbtccny":
					return ["OKCoin", "BTCCNY", "CNY", " CNY/BTC"];
				case "okcoinltccny":
					return ["OKCoin", "LTCCNY", "CNY", " CNY/LTC"];
				case "mcxnowltcbtc":
					return ["mcxNOW", "LTCBTC", "BTC", " BTC/LTC"];
				case "mcxnowxpmbtc":
					return ["mcxNOW", "XPMBTC", "BTC", " BTC/XPM"];
				case "bitfinexbtcusd":
					return ["Bitfinex", "BTCUSD", "USD", " USD/BTC"];
				case "bitcoindebtceur":
					return ["Bitcoin.de", "BTCEUR", "EUR", " EUR/BTC"]
				}
			}
			function Xr() {
				return n = !0,
				ui("Cross is locked."),
				$("#main canvas").css("cursor", "default")
			}
			function Kr() {
				return n = !1,
				ui("Cross is unlocked."),
				$("#main canvas").css("cursor", "none")
			}
			function Qr() {
				var t,
				n,
				e,
				r,
				i,
				o,
				u;
				for (Ne = Sr.width() - kr.width() - _r.width(), Re = Sr.height() - yr.height() - vr.height(), br.height(Re), u = [He, We], i = 0, o = u.length; o > i; i++) n = u[i],
				n.width = Ne,
				n.height = Re;
				return r = Re - hr.outerHeight(!0),
				Br.height(r),
				or = Math.floor(Re / 6 - gn),
				Ae = Math.floor((Ne - De) / Ue) + Math.floor(De / Ue) - 1,
				Pe = Math.floor((Ne - De) / Ue),
				xn ? (t = xn[f], e = j(t, h).length - 1, jn = e, null != Ke ? Ke -= Pe - Fr: (Ke = e - Pe + 1, 0 > Ke && (Ke = 0)), Fr = Pe, Wr(), ni(), !0) : void 0
			}
			function Vr() {
				var t;
				return t = Ee,
				We.width = We.width
			}
			function Zr(t, n, e, r, i, o) {
				var u,
				a;
				return u = e,
				a = r,
				null == i && (i = t.measureText(n).width),
				t.beginPath(),
				t.textBaseline = "middle",
				"r" === o ? (t.moveTo(u, a), t.lineTo(u - 5, a + 10.5), t.lineTo(u - 5 - i - 6 - 5 + .5, a + 10.5), t.lineTo(u - 5 - i - 6 - 5 + .5, a - 10.5), t.lineTo(u - 5, a - 10.5), t.lineTo(u, a), t.fill(), t.stroke(), t.fillStyle = ye["Axis Text"], t.fillText(n, u - 5 - 3 - i, a)) : (t.moveTo(u, a), t.lineTo(u + 5, a + 10.5), t.lineTo(u + 5 + i + 6 + 5, a + 10.5), t.lineTo(u + 5 + i + 6 + 5, a - 10.5), t.lineTo(u + 5, a - 10.5), t.lineTo(u, a), t.fill(), t.stroke(), t.fillStyle = ye["Axis Text"], t.fillText(n, u + 5 + 3, a))
			}
			function ti(t) {
				var n;
				return n = t > 100 ? 5: 4,
				t.toPrecision(n)
			}
			function ni() {
				var t,
				n,
				e,
				r,
				i,
				o,
				u,
				a,
				l,
				s,
				c,
				m,
				v,
				x,
				b,
				$,
				w,
				T,
				k,
				B,
				S,
				M,
				D,
				F,
				I,
				R,
				N,
				E,
				L;
				if (xn && ($ = Ee, n = xn[f], w = Pr > Ne - De, w ? (i = Pr, o = Ur) : (i = Oe, o = Ge), t = $settings.stick_style.value, null != i && (Vr(), $.strokeStyle = ye.Cross, $n($, o + .5, 0, Ne), wn($, i + .5, 0, Re), Yr = z(n, Ke + Xe, p), V && (r = V[A], r.y + r.h < o && o < r.y && (u = V[P], V[U] ? (b = u.y, x = u.y + u.h, l = 0, a = Math.log(x / b), D = (o - r.y) / r.h * a + l, B = Math.exp(D) * b) : B = (o - r.y) / r.h * u.h + u.y, S = ti(B), $.font = "12px Consolas, Monospace", $.fillStyle = ye["Axis Text"], $.textAlign = "left", F = $.measureText(S).width, R = Ne - De + (De - F - 8) / 2, N = o, $.strokeStyle = ye.Cross, $.fillStyle = ye["Background Mask"], w ? Zr($, S, Ne - De - 3, N, F, "r") : Zr($, S, R, N, F))), je && (Ke = ze - Xe), Yr[h]))) {
					for (M = z(n, Ke + Xe - 1, p), null == M && (M = Yr), k = null != M[h] ? Yr[h] / M[h] - 1: 0, k = 100 * k, k = k.toFixed(2), "-" === k[0] ? I = "→": k > 0 ? (k = "+" + k, I = "→—") : (k = "+" + k, I = "→"), I = "", m = ["DATE: " + In(Yr[d]), "O: " + ti(Yr[_]), "H: " + ti(Yr[g]), "L: " + ti(Yr[y]), "C: " + ti(Yr[h]), "CHANGE: " + k + " %", "AMPLITUDE: " + (100 * ((Yr[g] - Yr[y]) / Yr[y])).toFixed(2) + " %", "V: " + Yr[C].toFixed(2)].join("   "), v = [m], $.textBaseline = "middle", $.font = "11px Consolas, Monospace", $.textAlign = "left", F = $.measureText(v[1]).width, $.fillStyle = ye["Background Mask"], s = 16, T = 4, $.fillStyle = ye["Main Text"], c = E = 0, L = v.length; L > E; c = ++E) m = v[c],
					$.fillText(m, T, T + s / 2 + c * s);
					if (V && ("line" === t || "line_o" === t)) return e = "m" === $settings.line_style.value ? parseFloat(((Yr[g] + Yr[y]) / 2).toFixed(8)) : Yr[h],
					$.fillStyle = "",
					F = $.measureText(e).width + 8,
					s = 24,
					$.fillStyle = ye["Background Mask"],
					$.strokeStyle = ye.Border,
					o = ce(V, e),
					$.textAlign = "center",
					Ne / 2 > i ? (Cn($, i + 4, o, F, s), $.fillStyle = ye["Main Text"], $.fillText(e, i + 4 + F / 2, o + s / 2)) : (Cn($, i - 4, o, -F, s), $.fillStyle = ye["Main Text"], $.fillText(e, i - 4 - F / 2, o + s / 2)),
					$.strokeStyle = ye["Stick Line"],
					$.fillStyle = ye["Stick Line"],
					$.beginPath(),
					$.arc(i + .5, o, 3, 0, 2 * Math.PI, !0),
					$.closePath(),
					$.fill()
				}
			}
			function ei(t, n, e, r, i) {
				var o,
				u,
				a,
				l,
				s;
				return s = le(n, e, r),
				u = s[0],
				a = s[1],
				t.fillStyle = ye["Main Text"],
				t.font = "11px Consolas, Monospace",
				t.textBaseline = "middle",
				o = n[A],
				u < o.x + o.w / 2 ? (l = "← " + r, t.textAlign = "left", u += 3) : (l = r + " →", u -= 3, t.textAlign = "right"),
				t.fillText(l, u + i, a)
			}
			function ri(t, n, e) {
				return t.beginPath(),
				t.moveTo(n, e),
				t.lineTo(n + 6, e + 3),
				t.lineTo(n + 6, e - 3),
				t.fill()
			}
			function ii() {
				return Q++,
				Q ? xr.fadeIn("fast") : void 0
			}
			function oi() {
				return Q--,
				Q ? void 0: xr.fadeOut()
			}
			function ui(t) {
				return $("#notify .inner").text(t),
				$("#notify").fadeIn("fast").delay(800).fadeOut()
			}
			function ai(t) {
				var n,
				e,
				r,
				i,
				o,
				u,
				a;
				for (i = null, e = 0, u = 0, a = t.length; a > u; u++) if (n = t[u], n.price_currency === sn) {
					if (n.tid = parseInt(n.tid), i = n.tid, Me[n.tid] || n.tid <= X) continue;
					o = ie(n);
					for (Rr in Mn) he.call(Mn, Rr) && (r = Mn[Rr], Vn(r, o));
					for (Me[i] = o, Ie.push(o), Or.push(o); Or.length > 200;) Or.shift(); ++e
				}
				return [i, e]
			}
			function li(t, n) {
				function e(e) {
					function o() {
						me = t,
						jr("step", me, {
							mode: "session"
						}),
						xn = i,
						Ke = null,
						Je = null,
						Qr(),
						n(null)
					}
					return e ? n(ir("switch failed " + r.message)) : (o(), void 0)
				}
				var r,
				i;
				si(t, $sid,
				function() {
					e((r = arguments[0], i = arguments[1], r))
				})
			}
			function si(t, n, e) {
				function r() {
					return e(null, u)
				}
				var i,
				o,
				u,
				a;
				ir("switch to " + Nr[t]),
				Mn[t] && !Mn[t].is_simple ? ee(16,
				function() {
					u = Mn[t],
					An = t,
					Dn = Fn[t],
					r()
				}) : (ir("get history data from server for " + Nr[t]), a = {
					step: t,
					sid: n,
					symbol: $symbol.toLowerCase()
				},
				ii(), !An && 180 > Ne / Ue && (a.mode = "simple"), Pn("http://" + $host + ":8080/period", a,
				function() {
					return o = arguments[0],
					i = arguments[1],
					oi(),
					o ? e(o) : i ? (An = t, Dn = Fn[t] = i, ci(), u = Mn[t], u.is_simple = "simple" === a.mode, r(), void 0) : e(new Error("error, history data is empty"))
				}))
			}
			function ci() {
				var t,
				n,
				e,
				r,
				i,
				o,
				u,
				a;
				for (Rr = An, r = Dn, i = Zn(Rr, r), n = t = i[f], i[be] = Yn(j(t, v)), ir("apply " + Ie.length + " txes"), u = 0, a = Ie.length; a > u; u++) o = Ie[u],
				o[S] > i[be] && Vn(i, o);
				return i[ke] = function() {
					var n,
					r,
					i,
					o;
					for (i = H.price_mas.params, o = [], n = 0, r = i.length; r > n; n++) e = i[n],
					o.push(L(t, h, e));
					return o
				} (),
				i[Te] = function() {
					var n,
					r,
					i,
					o;
					for (i = H.price_mas.params, o = [], n = 0, r = i.length; r > n; n++) e = i[n],
					o.push(N(t, h, e));
					return o
				} (),
				i[Se] = function() {
					var n,
					r,
					i,
					o;
					for (i = H.volume_mas.params, o = [], n = 0, r = i.length; r > n; n++) e = i[n],
					o.push(L(t, C, e));
					return o
				} (),
				i[Ce] = O.apply(null, [t, h].concat(de.call(H.macd.params))),
				i[Be] = Y.apply(null, [t, h].concat(de.call(H.stoch_rsi.params))),
				i[xe] = E.apply(null, [t, [g, y, h]].concat(de.call(H.kdj.params))),
				i[we] = G(t, [_, g, y, h]),
				xn = Mn[Rr] = i,
				sr = !0
			}
			function fi(t) {
				return X = t
			}
			function hi(t) {
				return t.toString().replace(/\.\d+/, "<g>$&</g>")
			}
			function di(t, n) {
				var e,
				r,
				i,
				o,
				u,
				a;
				return null == n && (n = "green"),
				e = "green" === n ? "<i class=fa-arrow-up>": "<i class=fa-arrow-down>",
				a = parseFloat(t[w].toPrecision(7)).toString().substr(0, 7).split("."),
				u = a[0],
				o = a[1],
				o = null != o ? "." + o: "",
				i = document.createElement("div"),
				i.setAttribute("class", "row"),
				r = Gn(new Date(1e3 * t[B])),
				i.innerHTML = "<div class=v>" + u + "<g>" + o + "</g></div><div class=t>" + r + '</div><div class="p ' + n + '">' + parseFloat(t[k].toFixed(6)) + "</div>",
				i.tx = t,
				i.tx_style = n,
				i
			}
			function pi() {
				var t,
				n,
				e,
				i,
				o,
				u,
				a,
				l,
				s,
				c,
				f,
				h;
				for (Or.sort(function(t, n) {
					return t[S] - n[S]
				}), e = qe, i = qe.childNodes.length, a = 0, s = Or.length; s > a; a++) {
					for (u = Or[a], f = e.childNodes, l = 0, c = f.length; c > l && (t = f[l], !(t.tx[S] <= u[S])); l++);
					o = "bid" === u[M] ? "green": "ask" === u[M] ? "red": t ? t.tx[k] < u[k] ? "green": t.tx[k] > u[k] ? "red": t.tx_style: "green",
					null == u.count && (u.count = 1),
					n = di(u, o),
					(null != t ? t.tx[S] : void 0) < u[S] ? u[B] - t.tx[B] <= 1 && t.tx[M] === u[M] ? (u[w] += t.tx[w], u.count += t.tx.count, n = di(u, o), t.innerHTML = n.innerHTML, t.tx = n.tx) : (e.insertBefore(n, t), i && !$is_mobile &&
					function(t) {
						var n;
						return n = $(t),
						n.addClass("new"),
						n.hide(),
						n.slideDown(function() {
							return setTimeout(function() {
								return n.removeClass("new")
							},
							960)
						})
					} (n)) : e.appendChild(n)
				}
				for (; e.childNodes.length > 200;) e.removeChild(e.childNodes[e.childNodes.length - 1]);
				return (J = null != (h = e.childNodes[0]) ? h.tx: void 0) && (o = e.childNodes[0].tx_style, Tr.text(J[k].toString()).attr("class", o), document.title = (window.state||"")+" "+ J[k] + " " + $hsymbol, W || un(r, J[k]), W = !1),
				Or = [],
				sr = !0,
				this
			}
			function mi() {
				var t,
				n,
				e,
				l,
				s,
				f,
				h,
				d,
				p,
				m,
				g,
				v,
				y,
				_;
				for (h = r, n = h[i], l = h[u], n = n.slice(0, c - 1), l = l.slice( - c, -1), _i("asks", n), _i("bids", l), s = h[o].slice(0, c - 1), p = [], d = 0, g = 0, y = s.length; y > g; g++) t = s[g],
				d += t[1],
				p.push([t[0], d]);
				for (_i("gasks", p), f = h[a].slice( - c, -1), m = [], d = 0, f.reverse(), v = 0, _ = f.length; _ > v; v++) e = f[v],
				d += e[1],
				m.push([e[0], d]);
				return m.reverse(),
				_i("gbids", m),
				p.length && (nn = p[p.length - 1][1]),
				m.length && (en = m[0][1]),
				null
			}
			function gi() {
				return cn[0].changed_at = 0,
				cn.text(0)
			}
			function vi(t) {
				var n;
				return n = t.toPrecision(9).substr(0, 9).replace(/(.[^.])(0+)$/, "$1<g>$2</g>")
			}
			function yi(t) {
				var n;
				return n = t.toPrecision(6).substr(0, 6).replace(/(.[^.])(0+)$/, "$1<g>$2</g>")
			}
			function _i(t, n) {
				var e,
				r,
				i,
				o,
				u,
				a,
				l,
				s,
				f,
				h,
				d,
				p,
				m,
				g,
				v,
				y,
				_,
				x,
				b,
				C,
				w,
				T;
				u = "g" === t[0],
				o = -1 !== t.indexOf("ask"),
				null == mn[t] && (mn[t] = {}),
				m = mn[t],
				d = $("#" + t + " .table"),
				r = 1200,
				a = Date.now(),
				l = [];
				for (s in m) he.call(m, s) && (g = m[s], l.push(parseFloat(s)));
				for (n.reverse(), l.sort(function(t, n) {
					return n - t
				}), v = -1, y = function(t, n) {
					var e,
					i,
					o,
					s,
					c,
					f,
					h;
					if (u ? (s = (t * ue).toFixed(ae), e = Math.round(n)) : (s = t.toPrecision(12), e = n.toPrecision(6).substr(0, 6)), t = parseFloat(s), n = parseFloat(e), m[t]) c = m[t],
					u || n === c.amount || (n > c.amount ? c.ob_amount.css("color", "#6C6") : n < c.amount && c.ob_amount.css("color", "#F66"), setTimeout(function() {
						return c.ob_amount.css("color", "inherit")
					},
					r));
					else {
						for (c = $("<div class=row><span class=price></span> <span class=amount></span></div>"), i = !1, f = 0, h = l.length; h > f; f++) if (o = l[f], t > o) {
							m[o].before(c),
							i = !0;
							break
						}
						i || d.append(c),
						l.length && (c.addClass("new"), $is_mobile ? setTimeout(function() {
							return c.removeClass("new")
						},
						1.2 * r) : (c.hide(), c.slideDown(function() {
							return setTimeout(function() {
								return c.removeClass("new")
							},
							.8 * r)
						}))),
						m[t] = c,
						c.ob_price = $(".price", c),
						c.ob_amount = $(".amount", c)
					}
					return u || (s = vi(t), e = hi(yi(n))),
					v === parseInt(t) && (s = s.replace(/(\d+)\./, "<h>$&</h>")),
					c.amount_str !== e && (c.ob_amount.html(e), c.amount_str = e),
					c.price_str !== s && (c.ob_price.html(s), c.price_str = s),
					v = parseInt(t),
					c.price = t,
					c.amount = n,
					c.found_at = a
				},
				x = 0, C = n.length; C > x; x++) T = n[x],
				s = T[0],
				e = T[1],
				y(s, e);
				i = 0,
				f = [];
				for (s in m) he.call(m, s) && (p = m[s], f.push(parseFloat(s)));
				for (f.sort(function(t, n) {
					return n - t
				}), o && f.reverse(), i = 0, h = 0, _ = function(t, n) {
					return i > c + h && (n.remove(), delete m[t]),
					n.found_at < a && c > i ? (h++, n.addClass("remove"), n.removeClass("new"), delete m[t], $is_mobile ? setTimeout(function() {
						return n.remove()
					},
					1.2 * r) : setTimeout(function() {
						return n.slideUp(function() {
							return n.remove()
						})
					},
					r)) : ++i
				},
				b = 0, w = f.length; w > b; b++) s = f[b],
				p = m[s],
				_(s, p);
				return n.reverse(),
				sr = !0,
				this
			}
			function xi() {
				function t(t) {
					return t ? (ir("retry after 5 seconds"), ee(5e3,
					function(t) {
						xi(t)
					}), void 0) : (K[Rr].addClass("selected"), Xn = K[Rr], bi())
				}
				var n;
				Rr = parseInt(null != (n = $.cookie("step")) ? n: 900),
				li(Rr,
				function() {
					t((Qe = arguments[0], Ar = arguments[1], Qe))
				})
			}
			function bi() {
				function n(t) {
					var n,
					e,
					r = this;
					ir("get history trades"),
					Pn("http://" + $host + ":8080/trades", {
						since: 0,
						sid: $sid,
						symbol: $symbol
					},
					function() {
						var i,
						o,
						u;
						if (Qe = arguments[0], Ar = arguments[1], Qe) return ir(Qe),
						t();
						for (u = Ar.reverse(), i = 0, o = u.length; o > i; i++) n = u[i],
						n.tid <= X && (e = re(n), Or.push(e));
						lr = !0,
						t(r)
					})
				}
				return fi(Yn(j(xn[f], v))),
				Ze = 1e4,
				ir("Initialize Depth Digger"),
				q = !0,
				function(t) {
					return t = Wn("Depth"),
					function() {
						function n() {
							Pn(h,
							function() {
								function g() {
									var g,
									v,
									y,
									_,
									x,
									$,
									C,
									w;
									if (null != Ar ? Ar["return"] : void 0) {
										for (h = d, C = Ar["return"], e = C.asks, i = C.bids, p = C.time, s = C.now, o = JSON.stringify(Ar["return"]), f !== o && (gi(), f = o), c = [["ask", e], ["bid", i]], ln(r), g = 0, _ = c.length; _ > g; g++) for (w = c[g], ur = w[0], m = w[1], v = 0, x = m.length; x > v; v++) Yr = m[v],
										Yr[2] = ur,
										dn(r, Yr);
										for (a = 0, u = parseInt(p), on = u; (Yr = l[0]) && parseInt(Yr[3]) < u;)++a,
										l.shift();
										for (t.d("remove " + a + " depth"), y = 0, $ = l.length; $ > y; y++) Yr = l[y],
										dn(r, Yr);
										t.d("apply " + l.length + " depth"),
										t.d("load " + e.length + " asks and " + i.length + " bids"),
										b = s,
										ar = !0
									}
									Qn ? ee(6e4,
									function(t) {
										n(t)
									}) : ee(3e4,
									function(t) {
										n(t)
									})
								}
								Qe = arguments[0],
								Ar = arguments[1],
								Qe ? (t("fetch depth failed"), ee(15e3,
								function() {
									return n()
								})) : g()
							})
						}
						var e,
						i,
						o,
						u,
						a,
						s,
						c,
						f,
						h,
						d,
						p,
						m;
						d = "http://" + $host + ":8080/depth?symbol=" + $symbol + "&sid=" + $sid,
						h = d,
						f = "",
						n()
					} (),
					null
				} (ir),
				function() {
					var t,
					n,
					e,
					i,
					o,
					u,
					a,
					l;
					"Mt.Gox" !== tn && ee(2e3,
					function() {
						function s() {
							function c() {
								a = "http://" + $host + ":8080/sdepth?symbol=" + $symbol + "&sid=" + $sid + "&now=" + b,
								a += "&p=1",
								Pn(a,
								function() {
									function a() {
										function a() {
											$p ? ee(1e3,
											function(t) {
												s(t)
											}) : ee(1e3,
											function(t) {
												s(t)
											})
										}
										var c,
										f,
										h,
										d,
										p,
										m;
										if (null != Ar ? Ar["return"] : void 0) {
											for (ir.d("sdepth"), p = Ar["return"], t = p.asks, n = p.bids, o = p.now, t.length && (e = t[t.length - 1][0], un(r, e)), n.length && (i = n[0][0], un(r, i)), u = [["ask", t], ["bid", n]], c = 0, h = u.length; h > c; c++) for (m = u[c], ur = m[0], l = m[1], f = 0, d = l.length; d > f; f++) Yr = l[f],
											Yr[2] = ur,
											dn(r, Yr);
											gi(),
											b = o,
											ar = !0,
											a()
										} else ee(5e3,
										function() {
											a()
										})
									}
									Qe = arguments[0],
									Ar = arguments[1],
									Qe ? ee(5e3,
									function() {
										return s()
									}) : a()
								})
							}
							Qn ? ee(1e3,
							function() {
								return s()
							}) : c()
						}
						s()
					})
				} (),
				$test ? void 0: (ir("Initialize FullSync System"), Lr = !1, (Gr = function(t) {
					var e,
					r,
					i,
					o,
					u;
					t = Wn("FullSync"),
					n(function() {
						function n() {
							e = "",
							Pn("http://" + $host + ":8080/trades", {
								since: X,
								sid: $sid,
								symbol: $symbol
							},
							function() {
								function a() {
									function a() {
										function a() {
											var a;
											if (a = ai(r), o = a[0], i = a[1], i > 0 && (cn[0].changed_at = 0, Qn ? t("found " + i + " missed trade" + (i > 1 ? "s": "") + e) : t("found " + i + " trade" + (i > 1 ? "s": "") + e)), o) {
												for (fi(o); (u = Ie[0]) && u[T] < Date.now() - 3e4;) delete Me[u[S]],
												Ie.shift();
												lr = !0
											}
											ee(Ze,
											function(t) {
												n(t)
											})
										}
										var l;
										r = function() {
											var t,
											n,
											e,
											r;
											for (e = Ar.reverse(), r = [], t = 0, n = e.length; n > t; t++) l = e[t],
											l.price = l.price,
											l.amount = l.amount,
											l.price_currency = sn,
											r.push(l);
											return r
										} (),
										Ar = {
											result: "success",
											"return": r
										},
										"success" !== Ar.result && t("failed, " + Ar.error),
										r = Ar["return"],
										0 === r.length ? ee(Ze,
										function() {
											return n()
										}) : a()
									} (null != Ar ? Ar.reverse: void 0) ? a() : ee(Ze,
									function() {
										return n()
									})
								}
								Qe = arguments[0],
								Ar = arguments[1],
								Qe ? ee(Ze,
								function() {
									return n()
								}) : a()
							})
						}
						n()
					})
				})(ir), Qn ? (ir("Initialize Real-time System"),
				function(n) {
					var e,
					i,
					o;
					return n = Wn("Realtime"),
					o = "https://socketio.mtgox.com/mtgox?Currency=" + sn,
					o = "ws://websocket.mtgox.com?Currency=" + sn,
					(i = function() {
						function n() {
							if (a.dead) i();
							else {
								if (u < Date.now() - 2e4) return e(a),
								i();
								ee(1e3,
								function(t) {
									n(s.push(t))
								})
							}
						}
						function i() {
							return s
						}
						var u,
						a,
						s;
						a = new WebSocket(o),
						a.dead = !1,
						u = Date.now(),
						a.onopen = function() {
							var t,
							n,
							e,
							r;
							for (r = ["trades", "depth"], n = 0, e = r.length; e > n; n++) t = r[n],
							a.send(JSON.stringify({
								op: "mtgox.subscribe",
								type: t
							}));
							return ! 0
						},
						a.onmessage = function(n) {
							var i,
							o,
							s;
							if (null != a ? !a.dead: !0) {
								u = Date.now();
								try {
									if (i = JSON.parse(n.data), "private" === (null != i ? i.op: void 0)) switch (te = Date.now(), cn[0].changed_at = 0, i.channel_name) {
									case "depth." + t: for (; l.length > 900;) l.shift();
										return o = i.depth,
										s = [parseFloat(o.price), parseInt(o.total_volume_int) / 1e8, o.type_str, parseInt(o.now)],
										l.push(s),
										dn(r, s),
										ar = !0;
									case "trade.BTC":
										return ai([i.trade]),
										lr = !0
									}
								} catch(c) {
									return Qe = c,
									e(a)
								}
							}
						},
						a.onerror = function() {
							return e(a)
						},
						s = [],
						n()
					})(),
					e = function(t) { (null != t ? t.dead: 0) || (t.dead = !0, t.close(), ee(5e3,
						function() {
							return i()
						}))
					}
				} (ir)) : ir("<b>Realtime System only works on IE 10+, chrome, FF</b>"),
				function() {
					function t() {
						ee(1e3,
						function() {
							cn.text(cn[0].changed_at++),
							Qn ? te < Date.now() - 1e4 ? t($("#realtime_error").fadeIn()) : t($("#realtime_error").fadeOut()) : t()
						})
					}
					t()
				} (),
				function() {
					function t() {
						ee(1e3,
						function() {
							n = new Date,
							t(e.text(Rn(n)))
						})
					}
					var n,
					e;
					e = $("#now"),
					t()
				} (), fr.click(function() {
					try {
						ir("------"),
						Ie.length && ir("cached txes length: " + Ie.length + ", first is " + Gn(new Date(1e3 * Ie[0][B]))),
						ir("sorted txes length: " + Ir.length),
						ir("last tid: " + X + " " + Gn(new Date(X / 1e3))),
						l.length && ir("depth cache length " + l.length + ", first is " + Gn(new Date(parseInt(l[0].now) / 1e3))),
						ir("depth ask length " + r[i].size()),
						ir("depth bid length " + r[u].size()),
						ir("realtime active at " + Gn(new Date(te))),
						ir("-- STATUS --")
					} catch(t) {
						Qe = t,
						ir(Qe.message)
					}
					return ! 0
				}), li(me,
				function() {
					return oi()
				}))
			}
			var $i,
			Ci,
			wi,
			Ti,
			ki,
			Bi,
			Si,
			Mi;
			if (ge = window.$them_dark, ve = window.$theme_light, "dark" === $theme_name ? (ye = $theme_dark, $("html").attr("class", "dark")) : (ye = $theme_light, $("html").attr("class", "light")), $.support.cors = !0, Sr = $(window), br = $("#main"), kr = $("#sidebar_outer"), yr = $("#header_outer"), vr = $("#footer_outer"), _r = $("#leftbar_outer"), Cr = $("#nav"), Mr = $("#wrapper"), pr = $("#date"), fr = $("#assist"), wr = $("#periods"), Br = $("#trades"), mr = $("#depth"), hr = $("#before_trades"), cr = $("#ask"), dr = $("#bid"), Tr = $("#price"), $r = $("#markets"), gr = {
				asks: $("#asks div"),
				bids: $("#bids div"),
				gasks: $("#gasks div"),
				gbids: $("#gbids div")
			},
			qe = Br[0], He = $("#canvas_main")[0], We = $("#canvas_cross")[0], !He.getContext) return br.html("<div style=\"margin:6px\">\n<div>Sorry, your browser doesn't support BitcoinWisdom.</div>\n<dl>\n <dt>Minimum requirements:</dt>\n <dd>IE 9+, Chrome, Firefox or other modern browser.</dd>\n <dt>Recommaned requirements:</dt>\n <dd>IE 10+, Chrome, Firefox or other modern browser.</dd>\n <dt>Remarks:</dt>\n <dd>IE 9 won't support Realtime mode</dd>\n</div>"),
			void 0;
			Le = He.getContext("2d"),
			Ee = We.getContext("2d"),
			er = _r.width(),
			function() {
				function t(t) {
					function n(n, e) {
						var r,
						i,
						o,
						u;
						if (null == e && (e = ""), e && (e = ' class_name="' + e + '"'), i = Gn(new Date), fr.prepend($("<div" + e + "/>").html("[" + i + ("] " + t + ": ") + n)), o = fr[0], r = o.childNodes, u = r.length, u > 100) for (; u-->50;) o.removeChild(r[u]);
						return this
					}
					return n.d = function() {
						return $debug ? n.apply(null, arguments) : void 0
					},
					n
				}
				return Wn = t
			} (),
			ir = Wn("Eva"),
			ir("Welcome to BitcoinWisdom.com"),
			Nr = {
				60: "1m",
				180: "3m",
				300: "5m",
				900: "15m",
				1800: "30m",
				3600: "1h",
				7200: "2h",
				14400: "4h",
				21600: "6h",
				43200: "12h",
				86400: "1d",
				259200: "3d",
				604800: "1w"
			},
			Er = {};
			for (nr in Nr) he.call(Nr, nr) && (Yr = Nr[nr], Er[Yr] = nr);
			for (K = {},
			Xn = null, Ti = $("li.period", wr), Ci = 0, wi = Ti.length; wi > Ci; Ci++) rr = Ti[Ci],
			rr = $(rr),
			(Rr = Er[rr.text()]) && (K[Rr] = rr,
			function(t, n) {
				return n.click(function() {
					var e,
					r;
					li(t,
					function() {
						return e = arguments[0],
						r = arguments[1],
						e ? void 0: (Xn && Xn.removeClass("selected"), Xn = n, K[t].addClass("selected"), !0)
					})
				})
			} (Rr, rr));
			switch (Me = {},
			Ie = [], Ir = [], Or = [], Qn = null != window.WebSocket, te = Date.now(), ki = s(10), be = ki[0], ke = ki[1], Te = ki[2], Se = ki[3], Ce = ki[4], _e = ki[5], $e = ki[6], Be = ki[7], xe = ki[8], we = ki[9], Mn = {},
			xn = null, r = fn(), l = [], x = null, m = null, b = 0, Dn = null, An = null, Fn = {},
			pn = !1, me = 60, nn = 0, en = 0, on = 0, H = {
				price_mas: {
					cookie: "price_ma_cycles",
					params: [7, 30],
					names: ["MA%", "MA%", "MA%", "MA%"]
				},
				volume_mas: {
					cookie: "volume_ma_cycles",
					params: [5, 10, 20],
					names: ["MA%", "MA%", "MA%"]
				},
				macd: {
					cookie: "macd_params",
					params: [12, 26, 9],
					names: ["DIF", "DEA", "MACD"]
				},
				stoch_rsi: {
					cookie: "stock_rsi_params",
					params: [14, 14, 3, 3],
					names: ["K", "D"]
				},
				kdj: {
					cookie: "kdj_params",
					params: [9, 3, 3],
					names: ["K", "D", "J"]
				}
			},
			J = null, X = null, V = null, cn = $("#change"), cn[0].changed_at = 0, window.$is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), R = {
				depth_hint: !0,
				sidebar: !0
			},
			Bi = Jr($symbol), tn = Bi[0], t = Bi[1], sn = Bi[2], Kn = Bi[3], Qn && (Qn = "Mt.Gox" === tn), oe = 0, ae = 1, ue = 1, "LTCUSD" === t ? (oe = .05, ae = 2) : "LTCBTC" === t ? (oe = 1e-4, ue = 1e4, ae = 0) : "XChange" === t ? (oe = .001, ue = 1e3, ae = 0) : "BTCCNY" === t ? (oe = 50, ae = 0) : "BTCJPY" === t ? (oe = 100, ae = 0) : "PPCBTC" === t || "NMCBTC" === t || "XPMBTC" === t ? (oe = 1e-4, ue = 1e5, ae = 0) : "BTCUSD" === t || "BTCCAD" === t || "BTCEUR" === t || "BTCGBP" === t || "BTCAUD" === t ? (oe = 5, ae = 0) : (oe = .5, ae = 1), r = fn(oe), F = null, $symbol) {
			case "mtgoxbtcusd":
				F = 500;
				break;
			case "bitstampbtcusd":
				F = 500;
				break;
			case "btcchinabtccny":
				F = 200;
				break;
			case "btcebtcusd":
				F = 200;
				break;
			case "btceltcusd":
				F = 4e3;
				break;
			case "btceltcbtc":
				F = 4e3
			}
			Re = null,
			Ne = null,
			De = 100,
			gn = 8,
			Fe = parseInt(null != (Si = $.cookie("barWidth")) ? Si: 5),
			Ve = parseInt(null != (Mi = $.cookie("gapWidth")) ? Mi: 3),
			qr = (Fe - 1) / 2,
			Ye = 0,
			Ue = Fe + Ve,
			or = null,
			Ae = null,
			Pe = null,
			Dr = null,
			Fr = null,
			Oe = null,
			Ge = null,
			Pr = null,
			Ur = null,
			je = !1,
			sr = !1,
			lr = !1,
			ar = !1,
			Ke = null,
			Je = null,
			jn = 0,
			ze = null,
			Xe = null,
			n = !1,
			function() {
				return Mr.dblclick(function() {
					return n ? Kr() : Xr(),
					!0
				}),
				Mr.mousemove(function(t) {
					var e,
					r;
					return n || (e = t.pageX - er, r = t.pageY - yr.height(), Pr = e, Ur = r, Xe = Math.floor((e - Ye) / Ue), e = Xe * Ue + qr + Ye, Oe = e, Ge = r, ni(), je && Wr()),
					!0
				}),
				Mr.mouseout(function() {
					return n || (Oe = null, Vr()),
					!0
				}),
				Sr.mouseup(function() {
					return je = !1,
					!0
				}),
				Mr.mousedown(function() {
					return je = !0,
					ze = Ke + Xe,
					!1
				})
			} (),
			window.world_draw_main = Wr = function() {
				function t(t) {
					return null == t && (t = gn),
					p.y = p.y + p.h - t - 1,
					O.push(p.y),
					Mn.strokeStyle = ye.Border,
					$n(Mn, p.y + .5, 0, Ne),
					p.y -= t
				}
				var n,
				e,
				o,
				a,
				l,
				s,
				c,
				p,
				m,
				v,
				x,
				b,
				$,
				w,
				T,
				B,
				S,
				M,
				D,
				R,
				N,
				E,
				L,
				O,
				G,
				Y,
				W,
				H,
				q,
				z,
				X,
				K,
				Q,
				tn,
				rn,
				on,
				un,
				an,
				ln,
				sn,
				cn,
				fn,
				hn,
				dn,
				pn,
				mn,
				Cn,
				Mn,
				Dn,
				Fn,
				An,
				Pn,
				In,
				Rn,
				En,
				Gn,
				Wn,
				Hn,
				Xn,
				Kn,
				Qn,
				Vn,
				Zn,
				te,
				ne,
				ee,
				re,
				ie,
				oe,
				ue,
				ae,
				he,
				de,
				pe,
				ge,
				ve,
				_e,
				be,
				$e,
				Me,
				Ie,
				Ee,
				Oe,
				Ge,
				We,
				qe,
				je,
				ze,
				Xe,
				Qe,
				Ve,
				Ze,
				tr,
				er,
				rr,
				ir,
				ur,
				ar,
				lr,
				sr,
				cr,
				fr,
				hr,
				dr,
				mr,
				gr,
				vr,
				yr,
				_r,
				xr,
				br,
				$r,
				Cr;

				if (xn) {

					if (a = xn[f], e = $settings.stick_style.value, Mn = Le, He.width = He.width, D = j(a, h).length - 1, D > jn && D >= Ke + Pe && Ke + Ae >= D && (Ke += D - jn, jn = D), Ke > D && (Ke = D), 0 > Ke && (Ke = 0), Je = Ke + Ae, Je > D && (Je = D), "mas" === $settings.main_lines.value ? (Rn = xn[ke], ne = xn[Se]) : "emas" === $settings.main_lines.value ? (Rn = xn[Te], ne = xn[Se]) : (Rn = [], ne = []), ne = [], "macd" === $settings.indicator.value ? (ln = xn[Ce], dr = I(Z, a, Ke, Je, ln), B = dr[0], T = dr[1], on = dr[2], H = [B, T], N = qn([B, T, on]), q = -N, W = 2 * N) : "stoch_rsi" === $settings.indicator.value ? (Hn = xn[Be], mr = I(Z, a, Ke, Je, Hn), Gn = mr[0], En = mr[1], H = [Gn, En], q = 0, W = 100) : "kdj" === $settings.indicator.value && (X = xn[xe], gr = I(Z, a, Ke, Je, X), nr = gr[0], b = gr[1], z = gr[2], H = [nr, b, z], fn = zn([nr, b, z, [100]]), pn = Jn([nr, b, z, [0]]), q = pn, W = fn - pn), vr = I(Z, a, Ke, Je, [C, _, h, g, y, d]), re = vr[0], Fn = vr[1], c = vr[2], L = vr[3], tn = vr[4], w = vr[5], te = I(Z, a, Ke, Je, ne), In = I(Z, a, Ke, Je, Rn), "line" !== e && "line_o" !== e || "m" !== $settings.line_style.value || (c = I(Z, a, Ke, Je, xn[we])[0]), m = Ae * Ue, Ye = Ne - De - Pe * Ue, p = {
						x: Ye,
						y: Re,
						w: m,
						h: Re
					},
					S = {
						x: 0,
						y: 0,
						w: Ae,
						h: 0
					},
					O = [], p.h = -16, o = fe(p, S), t(0), p.y -= gn, p.h = -or, "none" === $settings.indicator.value ? an = null: (S.y = q, S.h = W, an = fe(p, S), t()), te.length ? (S.y = 0, S.h = zn([te, re])) : (S.y = 0, S.h = zn([re])), ee = fe(p, S), t(), 7200 >= me) for (Mn.strokeStyle = ye.Border, Y = ue = 0, de = w.length; de > ue; Y = ++ue) $ = w[Y],
					0 === $.getHours() && 0 === $.getMinutes() && (v = Ye + Y * Ue + qr + .5, wn(Mn, v, p.y + gn, p.y + gn - 6));
					for (In.length ? (G = [In, L], rn = [In, tn]) : (G = [L], rn = [tn]), fn = 1.01 * zn(G), pn = .99 * Jn(rn); fn && fn < L[L.length - 1];) fn *= 1.01;
					for (; pn && pn > tn[tn.length - 1];) pn *= .99;
					if (p.h = -p.y + gn + 12, S.y = pn, S.h = fn - pn, cn = fe(p, S, "logarithmic" === $settings.scale.value), V = cn, an) if (Vn = an, "macd" === $settings.indicator.value) for (Xn = ce(Vn, 0), Pn = on[0], M = ae = 0, _e = on.length; _e > ae; M = ++ae) R = on[M],
					R > 0 ? (Mn.fillStyle = ye["Green Fill"], Mn.strokeStyle = ye["Green Stroke"]) : (Mn.fillStyle = ye["Red Fill"], Mn.strokeStyle = ye["Red Stroke"]),
					zr(R, Pn) && (Mn.fillStyle = ye.Background),
					Bn(Mn, Vn, Xn, M, R, Fe),
					Pn = R;
					else if ("stoch_rsi" === (yr = $settings.indicator.value) || "kdj" === yr) for (Ve = [20, 80], he = 0, be = Ve.length; be > he; he++) Yr = Ve[he],
					Xn = ce(Vn, Yr);
					$n(Mn, Xn + .5, 0, Ne);
					for (Xn = ce(ee, 0), An = c[0], M = We = 0, $e = c.length; $e > We; M = ++We) {
						switch (R = c[M], e) {
						case "candle_stick_hlc":
							Dn = null != (Ze = c[M - 1]) ? Ze: Fn[M],
							s = c[M];
							break;
						default:
							Dn = Fn[M],
							s = c[M]
						}
						if (Q = tn[M], E = L[M], s > Dn ? (Mn.fillStyle = ye["Green Fill"], Mn.strokeStyle = ye["Green Stroke"]) : (Mn.fillStyle = ye["Red Fill"], Mn.strokeStyle = ye["Red Stroke"]), zr(s, Dn) && (Mn.fillStyle = ye.Background), Bn(Mn, ee, Xn, M, re[M], Fe), "ohlc" === e || "candle_stick" === e || "candle_stick_hlc" === e) switch (Sn(Mn, cn, M, Q, E, qr), e) {
						case "ohlc":
							v = se(cn, M),
							x = ce(cn, Dn),
							$n(Mn, x + .5, v, v + qr),
							x = ce(cn, s),
							$n(Mn, x + .5, v + qr, v + Fe);
							break;
						case "candle_stick":
							kn(Mn, cn, M, Dn, s, Fe);

							break;
						case "candle_stick_hlc":
							kn(Mn, cn, M, Dn, s, Fe)
						}
						An = R
					}

					if ("line" === e || "line_o" === e) {
						for (Mn.beginPath(), Mn.fillStyle = ye["Green Area"], tr = le(cn, [0, L[0]]), v = tr[0], x = tr[1], Mn.moveTo(v + qr, x), M = qe = 0, Me = L.length; Me > qe; M = ++qe) R = L[M],
						er = le(cn, M, R),
						v = er[0],
						x = er[1],
						Mn.lineTo(v + qr, x);
						for (M = je = rr = c.length - 1; 0 >= rr ? 0 >= je: je >= 0; M = 0 >= rr ? ++je: --je) R = c[M],
						ir = le(cn, M, R),
						v = ir[0],
						x = ir[1],
						Mn.lineTo(v + qr, x);
						for (Mn.fill(), Mn.beginPath(), Mn.fillStyle = ye["Red Area"], ur = le(cn, [0, tn[0]]), v = ur[0], x = ur[1], Mn.moveTo(v + qr, x), M = ze = 0, Ie = tn.length; Ie > ze; M = ++ze) R = tn[M],
						ar = le(cn, M, R),
						v = ar[0],
						x = ar[1],
						Mn.lineTo(v + qr, x);
						for (M = Xe = lr = c.length - 1; 0 >= lr ? 0 >= Xe: Xe >= 0; M = 0 >= lr ? ++Xe: --Xe) R = c[M],
						sr = le(cn, M, R),
						v = sr[0],
						x = sr[1],
						Mn.lineTo(v + qr, x);

						if (Mn.fill(), Mn.lineWidth = 2, Mn.strokeStyle = ye["Stick Line"], Tn(Mn, cn, c, qr + .5), "line_o" === e) for (Mn.fillStyle = ye.Background, Mn.strokeStyle = ye["Stick Line"], M = Qe = 0, Ee = c.length; Ee > Qe; M = ++Qe) R = c[M],
						cr = le(cn, M, R),
						v = cr[0],
						x = cr[1],
						Mn.beginPath(),
						Mn.arc(v + qr + .5, x, 2, 0, 2 * Math.PI, !0),
						Mn.closePath(),
						Mn.fill(),
						Mn.stroke();
						Mn.lineWidth = 1,
						L = c,
						tn = c
					}

					//买入,记录
					function buy(){
						var price = window.$('#price').html();
						var all = localStorage.getItem('all');
						if(!all){
							localStorage.setItem('all',100);
						}
						all = localStorage.getItem('all');
						localStorage.setItem('lastPrice',price);
						console.log('---------------');
						console.log('以'+price+'买入');
						console.log('当前总资产:'+all);
						console.log('---------------');
					}
					
					//卖出算收益
					function sell(){
						var price = window.$('#price').html();
						var diff = price-localStorage.getItem('lastPrice')*1;
						var all = localStorage.getItem('all');
						if(!all){
							localStorage.setItem('all',100);
						}
						localStorage.setItem('all',all*1+diff*1);
						console.log('---------------');
						console.log('以'+price+'卖出');
						console.log('当前总资产:'+ (all*1+diff*1));
						console.log('---------------');
					}
					
					
					//所有的均线都在这个循环
					for (Mn.lineWidth = 1, l = [[cn, In, !0], [ee, te, !0]], an && l.unshift([an, H, !0]), _r = 0, Oe = l.length; Oe > _r; _r++){


						if (fr = l[_r], Vn = fr[0], oe = fr[1], Wn = fr[2], Wn){
							var temp = [];
							//oe中是所有均线的数据，下面是均线的分组，只要发生交叉，两者的数据相等
							for (Y = xr = 0, Ge = oe.length; Ge > xr; Y = ++xr){
								ie = oe[Y];
								temp.push(ie[ie.length-1])
								
								Mn.strokeStyle = ye.Colors[Y];
								Tn(Mn, Vn, ie, qr + .5);
							}
							
							
							if(temp.length==3){

								if(Math.floor(temp[1]-temp[2])*window.lastDiff<0){
									//如果等于0了，就弹出提醒
									if(window.lastDiff>0){
										if(window.$("#checkboxplay")[0].checked==true){
											window.$('#jincha')[0].play();
										}
										//alert('金叉');
										window.state = '金叉';
										buy();
										
										

									}else{
										if(window.$("#checkboxplay")[0].checked==true){
											window.$('#sicha')[0].play();
										}
										//alert('死叉');
										window.state = '死叉';
										sell();
									}

								}
								window.lastDiff = Math.floor(temp[1]-temp[2]);
							}


						}
					}
					//画线的地方



					for (Mn.lineWidth = 1, hn = 0, dn = 0, Y = br = 0, pe = L.length; pe > br; Y = ++br) Yr = L[Y],
					Yr > hn && (hn = Yr, dn = Y);
					for (mn = 1 / 0, Cn = 0, Y = $r = 0, ge = tn.length; ge > $r; Y = ++$r) Yr = tn[Y],
					mn > Yr && (mn = Yr, Cn = Y);
					for (ei(Mn, cn, dn, hn, qr), ei(Mn, cn, Cn, mn, qr),
					function() {
						function t(t, n) {
							var e;
							return e = 60 * t.getTimezoneOffset(),
							(t.getTime() / 1e3 - e) % n < me
						}
						var n,
						e,
						r,
						i,
						u,
						l,
						s,
						c,
						f,
						h,
						m,
						g,
						y,
						_,
						x,
						b;
						if (Rr = me, r = null, i = null, n = null, e = null, s = {
							60: {
								cond: t,
								key_cond: function(t) {
									return 0 === t.getMinutes()
								},
								text: function(t) {
									return On(t)
								},
								key_text: function(t) {
									return Nn(t)
								},
								over: function(t) {
									return Un(t)
								}
							},
							3600: {
								cond: t,
								key_cond: function(t) {
									return 0 === t.getHours() && t.getDate() !== n
								},
								text: function(t) {
									return Nn(t)
								},
								key_text: function(t) {
									return n = t.getDate(),
									Un(t)
								},
								over: function(t) {
									return Un(t)
								}
							},
							86400: {
								cond: t,
								key_cond: function(t) {
									return ! 1
								},
								text: function(t) {
									return Un(t)
								},
								key_text: function(t) {
									return Un(t)
								},
								over: function(t) {
									return t.getFullYear()
								}
							},
							604800: {
								cond: function(t) {
									return t.getDate() < 8 && t.getMonth() !== r
								},
								key_cond: function(t) {
									return 0 === t.getMonth() && t.getFullYear() !== i
								},
								text: function(t) {
									return r = t.getMonth(),
									Ln(t)
								},
								key_text: function(t) {
									return i = t.getFullYear(),
									r = t.getMonth(),
									t.getFullYear()
								},
								over: function(t) {
									return t.getFullYear()
								}
							}
						},
						Rr >= 86400) {l = 604800,
						c = 604800;
					}
						else for (c = Rr * (80 / Ue), 1800 >= c ? (l = 60, m = [10, 30]) : 28800 >= c ? (l = 3600, m = [1, 2, 3, 6, 8]) : 1296e3 >= c ? (l = 86400, m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) : (l = 604800, m = 1), x = 0, y = m.length; y > x; x++) if (Y = m[x], l * Y > c) {
							c = l * Y;
							break
						}

						if (p = o[A], u = s[l]) {
							for (Mn.strokeStyle = ye.Border, Mn.textAlign = "center", Mn.textBaseline = "middle", w = j(a, d), h = b = _ = Ke - 1; Je >= _ ? Je >= b: b >= Je; h = Je >= _ ? ++b: --b)($ = w[h]) && (Y = h - Ke, u.cond($, c) && (u.key_cond($) ? (Mn.fillStyle = ye["Axis Text"], Mn.font = "bold 12px Consolas, Monospace", g = u.key_text($)) : (Mn.fillStyle = ye["Axis Text"], Mn.font = "11px Consolas, Monospace", g = u.text($)), v = Ye + Y * Ue + qr + .5, wn(Mn, v, p.y + p.h, p.y + p.h + 4), Mn.fillText(g, v, p.y + p.h + 8.5)));
							if (w[Ke]) return f = u.over(w[Ke]),
							pr.text(f)
						}
					} (), v = Ne - De, Mn.strokeStyle = ye.Border, Mn.textAlign = "left", Mn.textBaseline = "middle", Mn.font = "11px Consolas, Monospace", Mn.fillStyle = ye["Axis Background"], Mn.fillRect(v, 0, v + De, Re), Mn.fillStyle = ye["Axis Text"], hr = function() {
						var t,
						n,
						e,
						r;
						for (n = [an, cn, ee], e = [], r = 0, t = n.length; t > r; r++) Vn = n[r],
						Vn ? (Vn = fe(Vn[A], Vn[P], Vn[U]), Vn[A].w = De, Vn[A].x = v, e.push(Vn)) : e.push(void 0);
						return e
					} (), un = hr[0], sn = hr[1], Zn = hr[2], Cr = 0, ve = O.length; ve > Cr; Cr++) x = O[Cr],
					$n(Mn, x + .5, v, v + De);
					return vn(Mn, sn, "hr"),
					Kn = 0,
					Qn = 0,
					n = J && 3600 > me && nn && en,
					n && (Yr = fe(sn[A], sn[P], sn[U]), Yr[A].x += 8, Yr[A].w -= 8, Yr[P].x = 0, Yr[P].w = F ? F: Math.floor(Math.min(nn, en) / 5), K = Yr[P].w, bn(Mn, sn,
					function() {
						var t,
						n,
						e,
						o,
						a,
						l,
						s,
						c,
						f,
						h,
						d,
						p,
						m,
						g,
						y,
						_,
						b;
						for (Mn.save(), Mn.lineWidth = 2, m = [[i, 0, 500, ye["Green Arrow"]], [u, -1, -500, ye["Red Arrow"]]], _ = 0, p = m.length; p > _; _++) for (g = m[_], h = g[0], c = g[1], o = g[2], n = g[3], e = [], f = 0, l = 0, Mn.beginPath(), Mn.fillStyle = n, Mn.strokeStyle = n, a = Yr[A].x, Y = b = c; (o >= c ? o >= b: b >= o) && (t = r[h].at(Y)); Y = o >= c ? ++b: --b) {
							if (d = t[1], s = t[0], f += d, y = le(Yr, f, s), v = y[0], x = y[1], Y === c && Mn.moveTo(Yr[A].x, x), Mn.fillRect(a, x - 1, v - a + 1, 2), a = v, f > K) {
								Qn += K - (f - d),
								Kn += s * (K - (f - d));
								break
							}
							Qn += d,
							Kn += s * d
						}

						return Mn.restore()
					})),
					an && ("macd" === $settings.indicator.value ? yn(Mn, un) : _n(Mn, un, [0, 20, 80, 100])),
					vn(Mn, sn, "text"),
					vn(Mn, Zn),
					n && (p = sn[A],
					function() {
						var t,
						n;
						t = J[k],
						n = t,
						x = ce(cn, t),
						v = p.x,
						Mn.strokeStyle = ye["Arrow Text"],
						Mn.fillStyle = ye["Arrow Text"],
						ri(Mn, v, x),
						Mn.fillStyle = ye["Minor Arrow"],
						x = ce(cn, Kn / Qn),
						ri(Mn, v, x)
					} (), bn(Mn, Zn,
					function() {
						var t,
						n,
						e;
						return Mn.font = "11px Consolas, Monospace",
						n = Yn(j(a, C)),
						e = le(ee, Je - Ke + 1, n),
						v = e[0],
						x = e[1],
						t = Mn.measureText(n.toFixed(5)),
						Mn.fillStyle = ye["Background Mask"],
						Mn.fillRect(p.x + 12, x - 6, t.width, 12),
						Mn.fillStyle = ye["Highlight Text"],
						Mn.fillText("←", p.x, x),
						Mn.fillText(n.toFixed(5), p.x + 12, x)
					})),
					null
				}
			},
			Hr = rn(150,
			function() {
				return ne(Qr)
			}),
			xr = $("#loading"),
			Q = 1,
			Sr.resize(function() {
				return n && Kr(),
				Hr()
			}),
			fr.hover(function() {
				return fr.height(320)
			},
			function() {
				return fr.height(32)
			}),
			Mr.mousewheel(function(t, n) {
				return n > 0 ? Fe += 2: Fe -= 2,
				3 > Fe && (Fe = 3),
				Fe > 27 && (Fe = 27),
				Ve = Math.round(.2 * Fe),
				3 > Ve && (Ve = 3),
				3 === Fe && (Ve = 2),
				Ue = Fe + Ve,
				qr = (Fe - 1) / 2,
				jr("barWidth", Fe),
				jr("gapWidth", Ve),
				Qr(),
				!1
			}),
			$("#switch_theme").click(function() {
				var t;
				return t = $(this).text(),
				$.cookie("theme", t, {
					expires: 365,
					path: "/"
				}),
				window.location.reload(),
				!0
			}),
			$("#close_ad").click(function() {
				return _r.hide(),
				er = 0,
				Qr(),
				!0
			}),
			$("#show_qr").click(function() {
				var t;
				return t = $("#qr"),
				t.is(":visible") ? ($(this).text("Show QR Code"), t.hide()) : ($(this).text("Hide QR Code"), t.show()),
				!0
			}),
			$("#close_qr").click(function() {
				return $("#show_qr").text("Show QR Code"),
				$("#qr").hide(),
				!0
			}),
			hn = $("#settings"),
			$("#btn_settings").click(function() {
				return hn.is(":visible") ? hn.hide() : hn.show(),
				!0
			}),
			$("#close_settings").click(function() {
				return hn.is(":visible") ? hn.hide() : hn.show(),
				!0
			}),
			$i = function(t, n) {
				function e() {
					var n,
					e,
					r,
					o,
					u,
					a;
					for (r = H[t].params, a = [], n = o = 0, u = i.length; u > o; n = ++o) e = i[n],
					a.push($(e).val(r[n]));
					return a
				}
				var r,
				i,
				o,
				u;
				if (n.default_params = n.params, r = n.cookie, i = $("input[name=" + t + "]"), i.change(function() {
					var n,
					e,
					o,
					u;
					for (e = [], o = 0, u = i.length; u > o; o++) {
						if (n = i[o], Yr = $(n).val(), !Yr.match(/^\d+$/)) {
							if ("price_mas" === t && "" === Yr) continue;
							return alert(Yr + " is not integer."),
							void 0
						}
						e.push(parseInt(Yr))
					}
					return $.cookie(r, JSON.stringify(e), {
						expires: 3650,
						path: "/"
					}),
					H[t].params = e,
					Mn = {},
					Mn[An] = Dn,
					ci()
				}), $("#indicator_" + t + " button").click(function() {
					return H[t].params = H[t].default_params,
					e(),
					$(i[0]).change()
				}), u = $.cookie(r)) try {
					o = JSON.parse(u),
					H[t].params = o
				} catch(a) {}
				return e()
			};
			for (ur in H) he.call(H, ur) && (tr = H[ur], $i(ur, tr));
			W = !0,
			e = {
				USD: "$",
				EUR: "â‚¬",
				GBP: "Â£",
				CNY: "Â¥",
				JPY: "Â¥",
				AUD: "A$",
				CAD: "C$",
				BTC: "à¸¿",
				LTC: "Å"
			},
			pe = {},
			c = 15,
			En = {},
			D = {},
			an = null,
			Hn = {},
			mn = {},
			function() {
				function t() {
					sr && (ni(), Wr(), sr = !1),
					ee(80,
					function(n) {
						t(n)
					})
				}
				t()
			} (),
			function() {
				function t() {
					lr && (pi(), lr = !1),
					ar && (mi(), ar = !1),
					ee(120,
					function(n) {
						t(n)
					})
				}
				t()
			} (),
			function() {
				return $("#main").show(),
				$("#footer").show()
			} (),
			Qr(),
			xi()
		})
	} (),
	function() {
		var t = this;
		$(function() {
			function n(t) {
				var n,
				e,
				r,
				i;
				return i = t.outerWidth(),
				n = t.outerHeight(),
				r = ($(window).height() - n) / 3,
				e = ($(window).width() - i) / 2,
				t.css({
					left: e,
					top: r
				})
			}
			function e(t) {
				var n,
				e,
				r,
				i,
				o,
				u,
				a,
				l,
				s,
				c,
				f,
				h;
				for (i = t.match(/(\d+)-(\d+)-(\d+) (\d+):(\d+):([\d\.]+)([\+\-]\d+)/), r = c = 0, f = i.length; f > c; r = ++c) u = i[r],
				i[r] = parseInt(u, 10);
				return h = i,
				s = h[0],
				a = h[1],
				i = h[2],
				n = h[3],
				e = h[4],
				r = h[5],
				o = h[6],
				l = h[7],
				t = new Date(a, i - 1, n, e, r, o),
				t.setMinutes(t.getMinutes() - t.getTimezoneOffset() - 60 * l),
				t
			}
			function r(t, n, e) {
				var r;
				return r = $.ajax({
					url: "/api.php?method=" + t,
					type: "POST",
					dataType: "json",
					data: n
				}),
				r.done(function(t) {
					return e(t)
				}),
				r.fail(function(t, n, r) {
					var i;
					return "error" === n && (n = ""),
					i = r || n || "request failed.",
					e({
						error: 1,
						reason: i
					})
				})
			}
			function i(t) {
				var e,
				r,
				i,
				o,
				u,
				a,
				l,
				s;
				for (r = $("#dlg_" + t.name), i = [], e = [], s = t.tabs, u = function(t) {
					var o,
					u;
					return i.push(u = $(".link_" + t)),
					e.push(o = $(".content_" + t, r)),
					u.click(function() {
						var t,
						a,
						l,
						s,
						c;
						for (a = 0, s = e.length; s > a; a++) t = e[a],
						t.hide();
						for (l = 0, c = i.length; c > l; l++) t = i[l],
						t.removeClass("selected");
						return u.addClass("selected"),
						$(".error", o).hide(),
						o.trigger("change"),
						o.show(),
						r.show(),
						n(r),
						$("input:first", o).focus(),
						!0
					})
				},
				a = 0, l = s.length; l > a; a++) o = s[a],
				u(o);
				return $(".close", r).click(function() {
					return r.hide()
				}),
				$(window).on("resize",
				function() {
					return n(r)
				}),
				r
			}
			return function() {
				var t,
				n,
				e,
				o,
				u,
				a,
				l;
				for (t = {
					name: "passport",
					tabs: ["login", "register", "premium"]
				},
				n = i(t), l = ["register", "login"], o = function(t) {
					var e,
					i,
					o,
					u;
					return e = $(".content_" + t, n),
					i = $("form", e),
					u = $("input[type=submit]"),
					o = $(".error", e),
					i.bind("submit",
					function() {
						return function() {
							var n,
							u,
							a;
							o.fadeOut("fast"),
							u = i.serializeArray(),
							r("passport_" + t, u,
							function() {
								return a = arguments[0],
								a.error ? ($(".error", e).text(a.reason).fadeIn("fast"), $(i[0][a.name]).focus()) : (n = "register" === t ? "Register": "Login", e.append("<div class=ok>" + n + " successfully.</div>"), i.hide(), setTimeout(function() {
									return i.unbind("submit"),
									i[0].action = window.location.href,
									i[0].method = "POST",
									i.submit()
								},
								400))
							})
						} (),
						!1
					})
				},
				u = 0, a = l.length; a > u; u++) e = l[u],
				o(e);
				return $("input[name=recover_password]").click(function() {
					var t,
					n;
					return t = $(".content_login"),
					n = $("form", t),
					function() {
						var e;
						r("passport_recovery_mail", n.serializeArray(),
						function() {
							return e = arguments[0],
							e.error ? ($(".error", t).text(e.reason).fadeIn("fast"), $(n[0][e.name]).focus()) : $(".error", t).html("").append($("<div class=ok>").html("A recovery mail has been sent to<br>" + e.email + ".")).fadeIn("fast")
						})
					} ()
				})
			} (),
			function() {
				function t() {
					var t,
					n,
					i,
					u,
					a,
					l,
					s,
					c,
					f;
					r("account_info", {},
					function() {
						var r,
						h,
						d;
						if (s = arguments[0], !s.error) {
							for ("t" === s.is_premium ? (i = In(e(s.expires_on)), u = ((e(s.expires_on).getTime() - Date.now()) / 86400 / 1e3).toFixed(0), c = u > 1 ? "s": "", $(".premium", o).html("Expires on " + i + ' <span style="color:#666"><small>(' + u + " day" + c + " left)</small></span>")) : $(".premium", o).html("Upgrade to premium account."), t = $(".address", o), d = $(".direct_address"), r = 0, h = d.length; h > r; r++) a = d[r],
							l = $(a),
							n = l.attr("amount"),
							f = "bitcoin:" + s.address + "?amount=" + n + "&label=BitcoinWisdom",
							f = "bitcoin:" + s.address + "?label=BitcoinWisdom",
							l.attr("href", f);
							return t.html("" + s.address),
							$(".qr", o).attr("data", $(".direct_address").attr("href"))
						}
					})
				}
				var n,
				o;
				return n = {
					name: "ucp",
					tabs: ["home", "premium", "history", "logout"]
				},
				o = i(n),
				$(".content_history", o).change(function() {
					var t,
					n,
					i;
					n = $(this),
					n.html("<div class=ok>Loading...</div>"),
					r("user_history", {},
					function() {
						var r,
						o,
						u,
						a,
						l,
						s,
						c,
						f,
						h;
						return i = arguments[0],
						i.error ? n.html("<div class=error>Load history failed></div>") : (t = function() {
							var t,
							n,
							d,
							p,
							m,
							g,
							v;
							for (m = i.orders, v = [], t = 0, d = m.length; d > t; t++) switch (c = m[t], a = c.info, r = In(e(c.created_at)), o = In(e(a.expires_on)), s = In(e(a.old_expires_on)), a.type) {
							case "premium":
							case "premium_direct":
								for (g = ["years", "months", "days"], n = 0, p = g.length; p > n; n++) u = g[n],
								l = a[u],
								l ? (h = l > 1 ? "s": "", a[u + "_str"] = " " + parseFloat(l.toFixed(2)) + " " + u.slice(0, -1) + h) : a[u + "_str"] = "";
								f = "",
								a.remark && (f += "<br/>" + a.remark),
								a.tx_hash && (f += "<br/>Tx: <a href=//blockchain.info/tx/" + a.tx_hash + " target=_blank>" + a.tx_hash.slice(0, 25) + "...</a>"),
								v.push("<tr><td>" + r + "</td><td>Extend premium" + a.years_str + a.months_str + a.days_str + "<br> From " + s + " to " + o + f + "</td></tr>");
								break;
							default:
								v.push(void 0)
							}
							return v
						} (), t.length ? n.html("<table class=s1>" + t.join("") + "</table>") : n.html("<div class=ok>You don't have any order yet.</div>"))
					})
				}),
				$(".content_home", o).change(t),
				t(),
				$(".link_logout").click(function() {
					var t,
					n;
					t = $(".content_logout"),
					t.css("height", "auto"),
					r("passport_logout", {},
					function() {
						return n = arguments[0],
						n.error ? t.html($("<div class=error>").text(n.reason).show()) : (t.html("<div class=ok>Logout successful.</div>"), $.removeCookie("bwsid", {
							path: "/"
						}), window.location.href = window.location.href)
					})
				})
			} (),
			$(".qr").hover(function() {
				var t,
				n,
				e,
				r,
				i;
				return e = $("#qr"),
				i = $(this).offset(),
				n = i.left,
				r = i.top,
				t = $(this).attr("data"),
				$("img", e).hide().attr("src", "/qr?data=" + encodeURIComponent(t) + "&size=7").load(function() {
					var t,
					i,
					o;
					return i = $(this),
					o = i.width(),
					t = i.height(),
					e.css({
						left: n - o - 24,
						top: r - t / 2
					}),
					i.show()
				}),
				e.show()
			},
			function() {
				return $("#qr").hide()
			}),
			$p ? $(".cond_np").hide() : $(".cond_p").hide(),
			t
		})
	} (),
	function() {
		return $("#connection").hover(function() {
			var t,
			n,
			e;
			return n = $(this),
			e = n.offset(),
			t = $("#help_connection"),
			t.css({
				left: e.left - (t.width() - n.width()) / 2,
				top: e.top - t.outerHeight()
			}),
			t.show()
		},
		function() {
			var t;
			return t = $("#help_connection"),
			t.hide()
		})
	} ()
}.call(this);