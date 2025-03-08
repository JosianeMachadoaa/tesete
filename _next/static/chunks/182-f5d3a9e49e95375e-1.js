(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [182],
  {
    4182: function (e, t, s) {
      "use strict";
      s.d(t, {
        R: function () {
          return ex;
        },
      });
      var a = s(7437),
        r = s(974),
        l = s(2265),
        i = s(4839),
        o = s(6164);
      function n() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, o.m6)((0, i.W)(t));
      }
      s(2488);
      let c = l.forwardRef((e, t) => {
        let { className: s, value: l, ...i } = e;
        return (0, a.jsx)(r.fC, {
          ref: t,
          className: n(
            "relative h-4 w-full overflow-hidden rounded-full bg-[#25214B]",
            s
          ),
          ...i,
          children: (0, a.jsx)(r.z$, {
            className: "h-full w-full flex-1 bg-[#00D9CD] transition-all",
            style: { transform: "translateX(-".concat(100 - (l || 0), "%)") },
          }),
        });
      });
      (c.displayName = r.fC.displayName),
        (l.forwardRef((e, t) => {
          let { className: s, value: l, ...i } = e;
          return (0, a.jsx)(r.fC, {
            ref: t,
            className: n(
              "relative h-20 w-20 overflow-hidden rounded-full bg-primary/20 flex justify-center items-center",
              s
            ),
            ...i,
            style: {
              background:
                "radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#f97316 ".concat(
                  l || 0,
                  "%, #eee 0)"
                ),
            },
            children: (0, a.jsx)("div", {
              className: "",
              children: "".concat(l || 0, "%"),
            }),
          });
        }).displayName = r.fC.displayName);
      var d = s(4969),
        x = s(1014),
        u = s(9343),
        m = s(7776),
        p = s(9772),
        h = s(8087),
        f = s(8472);
      let g = f.default.create({ baseURL: "/api" });
      var b = s(6623),
        v = s(2477),
        y = s(2974),
        j = s(2218);
      let k = (0, j.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        N = l.forwardRef((e, t) => {
          let { className: s, variant: r, size: l, asChild: i = !1, ...o } = e,
            c = i ? y.g7 : "button";
          return (0, a.jsx)(c, {
            className: n(k({ variant: r, size: l, className: s })),
            ref: t,
            ...o,
          });
        });
      N.displayName = "Button";
      let w = l.forwardRef((e, t) => {
        let { className: s, type: r, ...l } = e;
        return (0, a.jsx)("input", {
          type: r,
          className: n(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            s
          ),
          ref: t,
          ...l,
        });
      });
      w.displayName = "Input";
      var _ = s(3178);
      s(982);
      let C = () => {
        let [e, t] = (0, l.useState)(1),
          s = (0, h.useTranslations)();
        return (
          (0, l.useEffect)(() => {
            let e = setInterval(() => {
              t((t) => (t >= 100 ? (clearInterval(e), 100) : t + 1));
            }, 50);
            return () => clearInterval(e);
          }, []),
          (0, a.jsxs)("div", {
            className: "flex flex-col items-center mt-[50px] pr-3 pl-3",
            children: [
              (0, a.jsx)("div", {
                className: "flex justify-center ",
                children: (0, a.jsxs)("div", {
                  style: { width: 200, height: 200 },
                  className: "relative",
                  children: [
                    (0, a.jsx)(_.Wo, {
                      value: e,
                      styles: {
                        path: { stroke: "#5468FF", strokeLinecap: "butt" },
                        trail: {
                          stroke: "#D4DCE7",
                          strokeLinecap: "butt",
                          border: "5px solid #000",
                        },
                      },
                      children: (0, a.jsx)("img", {
                        style: { width: "77%" },
                        src: "/loading-profile.svg",
                        draggable: !1,
                        alt: "load",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "p-3 w-[100px] text-[#5468FF] font-bold text-2xl rounded-lg absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white flex justify-center items-center",
                      children: [e, "%"],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("h1", {
                className:
                  "text-3xl mt-[40px] text-center font-nunito font-bold ",
                children: s("analyzing"),
              }),
              (0, a.jsx)("p", {
                className: "font-nunito text-xl text-center font-medium mt-4",
                children:
                  "Nosso sistema est\xe1 procurando falhas seguran\xe7a nessa conta para achar uma brecha.",
              }),
            ],
          })
        );
      };
      var F = s(1942),
        S = s(8556);
      let D = (0, j.j)(
        "inline-flex items-center rounded-full border  font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
              secondary:
                "border-transparent bg-green-100 text-secondary-foreground hover:bg-primary/30 text-green-700",
              destructive:
                "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
              outline: "text-foreground",
            },
            size: {
              sm: "px-2.5 py-0.5 text-xs",
              md: "px-3 py-1 text-sm",
              lg: "px-4 py-2 text-base",
            },
          },
          defaultVariants: { variant: "default", size: "sm" },
        }
      );
      function z(e) {
        let { className: t, variant: s, size: r, ...l } = e;
        return (0, a.jsx)("div", {
          className: n(D({ variant: s, size: r }), t),
          ...l,
        });
      }
      var E = s(6463),
        A = s(1877),
        P = s(7059),
        I = s(4300),
        T = s(5137),
        R = s(1976);
      let B = l.createContext(null);
      function L() {
        let e = l.useContext(B);
        if (!e) throw Error("useCarousel must be used within a <Carousel />");
        return e;
      }
      let q = l.forwardRef((e, t) => {
        let {
            orientation: s = "horizontal",
            opts: r,
            setApi: i,
            plugins: o,
            className: c,
            children: d,
            ...x
          } = e,
          [u, m] = (0, I.Z)({ ...r, axis: "horizontal" === s ? "x" : "y" }, o),
          [p, h] = l.useState(!1),
          [f, g] = l.useState(!1),
          b = l.useCallback((e) => {
            e && (h(e.canScrollPrev()), g(e.canScrollNext()));
          }, []),
          v = l.useCallback(() => {
            null == m || m.scrollPrev();
          }, [m]),
          y = l.useCallback(() => {
            null == m || m.scrollNext();
          }, [m]),
          j = l.useCallback(
            (e) => {
              "ArrowLeft" === e.key
                ? (e.preventDefault(), v())
                : "ArrowRight" === e.key && (e.preventDefault(), y());
            },
            [v, y]
          );
        return (
          l.useEffect(() => {
            m && i && i(m);
          }, [m, i]),
          l.useEffect(() => {
            if (m)
              return (
                b(m),
                m.on("reInit", b),
                m.on("select", b),
                () => {
                  null == m || m.off("select", b);
                }
              );
          }, [m, b]),
          (0, a.jsx)(B.Provider, {
            value: {
              carouselRef: u,
              api: m,
              opts: r,
              orientation:
                s ||
                ((null == r ? void 0 : r.axis) === "y"
                  ? "vertical"
                  : "horizontal"),
              scrollPrev: v,
              scrollNext: y,
              canScrollPrev: p,
              canScrollNext: f,
            },
            children: (0, a.jsx)("div", {
              ref: t,
              onKeyDownCapture: j,
              className: n("relative", c),
              role: "region",
              "aria-roledescription": "carousel",
              ...x,
              children: d,
            }),
          })
        );
      });
      q.displayName = "Carousel";
      let M = l.forwardRef((e, t) => {
        let { className: s, ...r } = e,
          { carouselRef: l, orientation: i } = L();
        return (0, a.jsx)("div", {
          ref: l,
          className: "overflow-hidden",
          children: (0, a.jsx)("div", {
            ref: t,
            className: n(
              "flex",
              "horizontal" === i ? "-ml-4" : "-mt-4 flex-col",
              s
            ),
            ...r,
          }),
        });
      });
      M.displayName = "CarouselContent";
      let V = l.forwardRef((e, t) => {
        let { className: s, ...r } = e,
          { orientation: l } = L();
        return (0, a.jsx)("div", {
          ref: t,
          role: "group",
          "aria-roledescription": "slide",
          className: n(
            "min-w-0 shrink-0 grow-0 basis-full",
            "horizontal" === l ? "pl-4" : "pt-4",
            s
          ),
          ...r,
        });
      });
      (V.displayName = "CarouselItem"),
        (l.forwardRef((e, t) => {
          let {
              className: s,
              variant: r = "outline",
              size: l = "icon",
              ...i
            } = e,
            { orientation: o, scrollPrev: c, canScrollPrev: d } = L();
          return (0, a.jsxs)(N, {
            ref: t,
            variant: r,
            size: l,
            className: n(
              "absolute  h-8 w-8 rounded-full",
              "horizontal" === o
                ? "-left-12 top-1/2 -translate-y-1/2"
                : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
              s
            ),
            disabled: !d,
            onClick: c,
            ...i,
            children: [
              (0, a.jsx)(T.Z, { className: "h-4 w-4" }),
              (0, a.jsx)("span", {
                className: "sr-only",
                children: "Previous slide",
              }),
            ],
          });
        }).displayName = "CarouselPrevious"),
        (l.forwardRef((e, t) => {
          let {
              className: s,
              variant: r = "outline",
              size: l = "icon",
              ...i
            } = e,
            { orientation: o, scrollNext: c, canScrollNext: d } = L();
          return (0, a.jsxs)(N, {
            ref: t,
            variant: r,
            size: l,
            className: n(
              "absolute h-8 w-8 rounded-full",
              "horizontal" === o
                ? "-right-12 top-1/2 -translate-y-1/2"
                : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
              s
            ),
            disabled: !d,
            onClick: c,
            ...i,
            children: [
              (0, a.jsx)(R.Z, { className: "h-4 w-4" }),
              (0, a.jsx)("span", {
                className: "sr-only",
                children: "Next slide",
              }),
            ],
          });
        }).displayName = "CarouselNext");
      var W = s(5733);
      let G = [
          "sabe quem \xe9?",
          "j\xe1 viu?",
          "kkkk",
          "saudades",
          "ce n\xe3o sabe de uma",
        ],
        Z = (e) => {
          let { name: t = "Gustavo", city: s } = e;
          return (
            G[Math.floor(Math.random() * G.length)],
            (0, a.jsxs)("div", {
              className:
                "print bg-[#000] rounded-2xl relative h-[240px] mt-[20px] w-full",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "itens space-x-3 flex items-end absolute z-[4] left-[4%] top-[35%]",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "min-h-[25px] mb-[8px] min-w-[25px] rounded-full bg-profile-m bg-cover bg-no-repeat",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "messages select-none pointer-events-none space-y-[3px] pr-[20px] ",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "bg-[#262626] text-[14px] w-fit rounded-tr-3xl rounded-bl-[4px] rounded-br-3xl rounded-tl-3xl px-[14px] py-[8px] text-[#eee]",
                          children: (0, a.jsx)("span", { children: "ei" }),
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "bg-[#262626] text-[14px] w-fit rounded-tr-3xl rounded-tl-[4px] rounded-bl-[4px] rounded-br-3xl  px-[14px] py-[8px] text-[#eee]",
                          children: (0, a.jsxs)("span", {
                            children: ["Vai t\xe1 em ", s, " esses dias?"],
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "bg-[#262626] text-[14px] w-fit rounded-tr-3xl rounded-tl-[4px] rounded-bl-[4px] rounded-br-3xl  px-[14px] py-[8px] text-[#eee]",
                          children: (0, a.jsx)("span", {
                            children: "Quero te ver rsrsrsrs",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute z-[2] rounded-2xl h-full w-full bg-header-dm bg-cover bg-no-repeat",
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute z-[1] scale-[85%] opacity-70 -top-[35px] rounded-2xl h-full w-full bg-header-dm bg-cover bg-no-repeat",
                }),
              ],
            })
          );
        },
        O = (e) => {
          let { image: t, city: s } = e;
          return (
            G[Math.floor(Math.random() * G.length)],
            (0, a.jsxs)("div", {
              className:
                "print bg-[#000] rounded-2xl relative h-[180px] mt-[20px] w-full mx-3",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "itens space-x-3 flex items-end absolute z-[4] left-[4%] top-[5%]",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "min-h-[25px] mb-[8px] min-w-[25px] rounded-full bg-cover bg-no-repeat",
                      style: { backgroundImage: "url('/blocked-user.svg')" },
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "messages select-none pointer-events-none space-y-[3px] pr-[20px] ",
                      children: (0, a.jsx)("div", {
                        className:
                          "bg-[#262626] text-[14px] w-fit overflow-clip rounded-tr-3xl rounded-bl-3xl rounded-br-3xl rounded-tl-[4px] px-[14px] py-[8px] text-[#eee]",
                        children: (0, a.jsx)("img", {
                          src: "/audio.svg",
                          alt: "",
                          width: 200,
                          draggable: !1,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "itens w-full space-x-3 flex items-end absolute z-[4] right-[4%] top-[14%] mt-10 flex-row-reverse ",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "min-h-[25px] mb-[8px] min-w-[25px] rounded-full bg-cover bg-no-repeat",
                      style: { backgroundImage: "url(".concat(t, ")") },
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "messages select-none pointer-events-none space-y-[3px] pr-[10px] ",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "bg-[#3B67EA] text-[14px] w-fit overflow-clip rounded-tl-3xl rounded-br-[4px] rounded-bl-3xl rounded-tr-[4px] px-[14px] py-[8px] text-[#eee]",
                          children: (0, a.jsx)("img", {
                            src: "/audio.svg",
                            alt: "",
                            width: 200,
                            draggable: !1,
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "w-full flex justify-end",
                          children: (0, a.jsxs)("div", {
                            className:
                              "bg-[#3B67EA] text-[14px] w-fit overflow-clip rounded-tl-3xl rounded-br-3xl rounded-bl-3xl rounded-tr-[4px] px-[14px] py-[8px] text-[#eee]",
                            children: ["Foi em ", s, " viu kkkkk"],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      function U(e) {
        let t = "https://images.weserv.nl/?url=";
        return e.startsWith(t)
          ? e.substring(t.length)
          : /^[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*$/.test(e)
          ? encodeURIComponent(e)
          : e;
      }
      let H = () => {
        var e;
        let { stories: t, user: s } = (0, d.W)(),
          r = t[0];
        return (0, a.jsxs)("div", {
          className:
            "print print3 bg-[#000]  rounded-2xl relative min-h-[390px] mt-[40px] w-full",
          children: [
            (0, a.jsxs)("div", {
              className:
                "itens  space-x-3 flex items-end absolute z-[4] left-[4%] top-[18%]",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "min-h-[25px] mb-[8px] min-w-[25px] !rounded-full bg-profile-f bg-cover bg-no-repeat",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "min-h-[25px] !mt-[14px] mb-[8px] min-w-[25px] !rounded-full bg-profile-f bg-cover bg-no-repeat",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "messages select-none pointer-events-none space-y-[3px] pr-[20px] ",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, a.jsxs)("small", {
                          className: "text-muted-foreground text-[11px]",
                          children: [
                            "Enviou o story de @",
                            null == s ? void 0 : s.username,
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "bar absolute left-0 h-[100%] w-[4px] !pt-[10px] !pb-[25px] ",
                          children: (0, a.jsx)("div", {
                            className:
                              "w-[100%] h-[100%] bg-[#272727] rounded-full",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "stories  mt-[8px] ml-[17px] w-[140px] rounded-xl h-[210px] p-[12px] ",
                          style: {
                            backgroundImage:
                              "url(https://images.weserv.nl/?url=".concat(
                                U(null == r ? void 0 : r.thumbnail_url),
                                ")"
                              ),
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                          },
                          children: (0, a.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "  min-w-[25px] w-[25px] !min-h-[25px] !h-[25px]  rounded-full ",
                                style: {
                                  backgroundImage: (
                                    null == s
                                      ? void 0
                                      : null ===
                                          (e = s.hd_profile_pic_url_info) ||
                                        void 0 === e
                                      ? void 0
                                      : e.url
                                  )
                                    ? "url(https://images.weserv.nl/?url=".concat(
                                        U(s.hd_profile_pic_url_info.url),
                                        ")"
                                      )
                                    : void 0,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                },
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "`text-white font-normal text-[11px]",
                                children: null == s ? void 0 : s.username,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "bg-[#262626] !mt-[14px] text-[14px] w-fit overflow-clip rounded-tr-3xl rounded-bl-3xl rounded-br-3xl rounded-tl-3xl px-[14px] py-[8px] text-[#eee]",
                      children: (0, a.jsxs)("span", {
                        children: [
                          "foi aquele dia?",
                          " ",
                          (0, a.jsx)("span", {
                            className: "blur-sm",
                            children: "conteudo oculto",
                          }),
                          " ",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "absolute z-[2] rounded-2xl h-full w-full bg-dm-mention bg-contain bg-no-repeat",
            }),
            (0, a.jsx)("div", {
              className:
                "absolute z-[1] scale-[85%] opacity-70 -top-[45px]  rounded-2xl h-full w-full",
            }),
          ],
        });
      };
      var $ = s(8546),
        X = s(4545),
        Y = s.n(X),
        Q = (e) => {
          var t;
          let { onAudioFinish: s } = e,
            r = (0, l.useRef)(null),
            i = (0, l.useRef)(null);
          (0, l.useRef)(null), (0, l.useRef)(null);
          let [o, n] = (0, l.useState)(!1),
            c = (0, l.useRef)(null);
          return (
            (0, l.useEffect)(() => {
              c.current ||
                ((c.current = $.Z.create({
                  container: "#waveform",
                  waveColor: "#FFFFFF",
                  progressColor: "#5F43F7",
                  barWidth: 4,
                  height: 35,
                  barRadius: 4,
                  barGap: 2,
                  normalize: !0,
                  barHeight: 25,
                  url: "/audio.mp3",
                })),
                c.current.on("audioprocess", () => {
                  c.current &&
                    c.current.getCurrentTime() >=
                      c.current.getDuration() / 1.35 &&
                    (s && s(), c.current.destroy());
                }));
            }, []),
            (0, a.jsx)("div", {
              className: Y().items,
              children: (0, a.jsxs)("div", {
                className: Y().audio,
                children: [
                  (0, a.jsxs)("div", {
                    id: "PlayBtn",
                    className: Y().PlayBtn,
                    ref: r,
                    onClick: () => {
                      c.current && c.current.play();
                    },
                    children: [
                      (0, a.jsx)("svg", {
                        className: Y().playIcon,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 25 25",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                          d: "M5.59253 3.29688L19.5925 12.2969L5.59253 21.2969V3.29688Z",
                          fill: "#DADCF7",
                          stroke: "#DADCF7",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      }),
                      (0, a.jsxs)("svg", {
                        className: Y().pauseIcon,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [
                          (0, a.jsx)("path", {
                            d: "M10 4H6V20H10V4Z",
                            fill: "#DADCF7",
                            stroke: "#DADCF7",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                          (0, a.jsx)("path", {
                            d: "M18 4H14V20H18V4Z",
                            fill: "#DADCF7",
                            stroke: "#DADCF7",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    id: "waveform",
                    className: Y().waveform,
                  }),
                  (0, a.jsx)("div", {
                    className: Y().muteDesmute,
                    style: {
                      opacity: "".concat(
                        (
                          null === (t = c.current) || void 0 === t
                            ? void 0
                            : t.getMuted()
                        )
                          ? "0.25"
                          : "1"
                      ),
                    },
                    ref: i,
                    onClick: () => {
                      c.current &&
                        n((e) => {
                          let t = !e;
                          return c.current && c.current.setMuted(t), t;
                        });
                    },
                    children: (0, a.jsx)("svg", {
                      width: "32",
                      height: "24",
                      viewBox: "0 0 32 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, a.jsxs)("g", {
                        id: "AudioIcon",
                        className: Y().AudioIcon,
                        stroke: "white",
                        children: [
                          (0, a.jsx)("path", {
                            id: "Vector",
                            d: "M14.125 1.79156L6.83333 7.6249H1V16.3749H6.83333L14.125 22.2082V1.79156Z",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                          (0, a.jsx)("path", {
                            id: "muteDesmute",
                            className: Y().mutarDesmutar,
                            d: "M25.8935 1.68945C28.6275 4.42423 30.1633 8.13289 30.1633 11.9999C30.1633 15.8668 28.6275 19.5755 25.8935 22.3103M20.7456 6.83737C22.1126 8.20476 22.8805 10.0591 22.8805 11.9926C22.8805 13.9261 22.1126 15.7804 20.7456 17.1478",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        };
      let J = [
          "tiraram print",
          "reviram",
          "pausaram por +20s",
          "enviaram para 2 amigos",
          "reviram 3x",
          "pausaram por +13s",
          "enviaram para amigos",
          "pausaram por +5s",
        ],
        K = [3, 5, 6, 7],
        ee = [
          "visitou seu perfil",
          "viu seus stories por +20s",
          "reviu seus stories 2 vezes",
          "reviu seus stories 3 vezes",
          "viu seus stories por +20s",
          "viu seus stories por +15s",
          "reviu seus stories",
        ],
        et = [
          { thumbnail_url: "/story_1.png" },
          { thumbnail_url: "/story_2.png" },
        ];
      function es(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
        if (t < 0) return "";
        if (e.length <= t) return e;
        let s = e.slice(0, t),
          a = "*".repeat(e.length - t);
        return "".concat(s).concat(a);
      }
      let ea = (e) => {
        let t = [];
        return (
          [...e, ...e, ...e, ...e].forEach((e) => {
            let { username: s } = e;
            t.push({
              username: "@".concat(es(s)),
              notification: ee[Math.floor(Math.random() * ee.length)],
            });
          }),
          t
        );
      };
      var er = s(6260),
        el = JSON.parse(
          '{"nm":"Comp 1","ddd":0,"h":500,"w":500,"meta":{"g":"@lottiefiles/toolkit-js 0.33.2"},"layers":[{"ty":4,"nm":"keyhole Outlines","sr":1,"st":0,"op":900,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,321.697,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0,0,100],"t":3},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100,100,100],"t":10},{"o":{"x":0.31,"y":0},"i":{"x":0.747,"y":1},"s":[80,80,100],"t":22},{"o":{"x":0.408,"y":0},"i":{"x":0.75,"y":1},"s":[80,80,100],"t":73},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[80,80,100],"t":81},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[40,40,100],"t":88},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[40,40,100],"t":113.6},{"s":[0,0,100],"t":120}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0,0,0],"t":10,"ti":[0,3.974,0],"to":[0,-3.974,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0,-23.842,0],"t":32,"ti":[0,0,0],"to":[0,0,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0,-23.842,0],"t":61,"ti":[13.492,-3.312,0],"to":[0,3.974,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0,0,0],"t":73,"ti":[22.024,-50.463,0],"to":[-13.492,3.312,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[-80.952,-3.968,0],"t":88,"ti":[-2.116,-0.066,0],"to":[-2.778,5.026,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[-31.746,46.825,0],"t":100.8,"ti":[-1.33,1.35,0],"to":[2.009,0.063,0]},{"s":[125.397,-112.698,0],"t":120}],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-28.765],[28.765,0],[0,28.765],[-28.765,0]],"o":[[0,28.765],[-28.765,0],[0,-28.765],[28.765,0]],"v":[[52.083,0],[0,52.083],[-52.083,0],[0,-52.083]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0.098,0.1255,0.1843],"t":73},{"s":[1,1,1],"t":81}],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[250,321.697],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[-5.696,-0.805],[-0.488,0],[0,0],[-0.058,5.753],[0.076,0.525],[0,0]],"o":[[0,0],[-0.806,5.696],[0.483,0.069],[0,0],[5.752,0.059],[0.005,-0.53],[0,0],[0,0]],"v":[[-22.808,-35.081],[-30.85,23.169],[-21.995,34.941],[-20.537,35.044],[21.13,35.044],[31.651,24.733],[31.546,23.148],[23.504,-35.102]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.1882,0.2588,0.3451],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":1,"k":[{"o":{"x":0.253,"y":0},"i":{"x":0.572,"y":1},"s":[249.703,320],"t":10,"ti":[0,-13.576],"to":[0,13.576]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[249.703,401.456],"t":27,"ti":[0,0],"to":[0,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[249.703,401.456],"t":61,"ti":[0,13.576],"to":[0,-13.576]},{"s":[249.703,320],"t":73}],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1,"parent":5},{"ty":4,"nm":"Tick Outlines","sr":1,"st":0,"op":900,"ip":90,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,250,0],"ix":1},"s":{"a":0,"k":[40,40,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,252.08,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[221.889,-160.282],[-98.672,160.282],[-221.889,37.063]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":90},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[75],"t":100.8},{"s":[0],"t":114}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":90,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[250,244.8],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2},{"ty":4,"nm":"Shape Layer 2","sr":1,"st":10,"op":62,"ip":32,"hd":false,"ddd":0,"bm":0,"hasMask":true,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,331.2,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"masksProperties":[{"nm":"Mask 1","inv":false,"mode":"a","x":{"a":0,"k":0,"ix":4},"o":{"a":0,"k":100,"ix":3},"pt":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-220,-115],[-300,115],[-252,115],[-172,-115]]}],"t":32},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[216,-115],[136,115],[184,115],[264,-115]]}],"t":61}],"ix":1}}],"shapes":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":36,"ix":4},"s":{"a":0,"k":[280,230],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.5216,0.5765,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}}],"ind":3},{"ty":4,"nm":"Shape Layer 3","sr":1,"st":88,"op":121,"ip":94,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.24,"y":0},"i":{"x":0.615,"y":1},"s":[0,0,100],"t":94},{"s":[166,166,100],"t":120}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,250,0],"ix":2},"r":{"a":0,"k":-360,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":742,"ix":4},"s":{"a":0,"k":[280,280],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":94},{"o":{"x":0.608,"y":0},"i":{"x":0.667,"y":1},"s":[30],"t":112},{"s":[0],"t":120}],"ix":5},"d":[{"nm":"dash","n":"d","v":{"a":0,"k":0,"ix":1}},{"nm":"gap","n":"g","v":{"a":0,"k":110,"ix":2}},{"nm":"offset","n":"o","v":{"a":0,"k":0,"ix":7}}],"c":{"a":0,"k":[0.098,0.7765,0.4392],"ix":3}}],"ind":4},{"ty":4,"nm":"Shape Layer 1","sr":1,"st":0,"op":900,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0,0,100],"t":0},{"o":{"x":0.311,"y":0},"i":{"x":0.751,"y":1},"s":[100,100,100],"t":10},{"o":{"x":0.405,"y":0},"i":{"x":0.746,"y":1},"s":[100,100,100],"t":73},{"s":[126,126,100],"t":81}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[250,250,0],"t":10,"ti":[0,-13.533,0],"to":[0,13.533,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[250,331.2,0],"t":32,"ti":[0,0,0],"to":[0,0,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[250,331.2,0],"t":61,"ti":[0,13.533,0],"to":[0,-13.533,0]},{"s":[250,250,0],"t":81}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0],"t":32},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0],"t":61},{"s":[-360],"t":81}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[742],"t":10},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[36],"t":32},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[36],"t":61},{"s":[742],"t":81}],"ix":4},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[280,280],"t":10},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[280,230],"t":32},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[280,230],"t":61},{"s":[280,280],"t":81}],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0.3294,0.4078,1],"t":73},{"s":[0.098,0.7765,0.4392],"t":81}],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}}],"ind":5},{"ty":4,"nm":"Lock Handle Outlines","sr":1,"st":0,"op":74,"ip":10,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[146.829,217.75,0],"ix":1},"s":{"a":0,"k":[80,80,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-82.537,-107,0],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":50},{"s":[-15],"t":55}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0],[-56.978,0],[0,-47.575],[0,0]],"o":[[0,0],[-0.002,-47.575],[56.977,0],[0,0],[0,0]],"v":[[-103.166,92.292],[-103.166,-6.152],[0,-92.292],[103.168,-6.152],[103.168,92.292]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":64.642,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":3,"e":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":50},{"s":[84],"t":55}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":0,"k":0,"ix":1},"m":1},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[249.995,350],"t":10,"ti":[0,37.424],"to":[0,-37.424]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[249.995,125.458],"t":32,"ti":[0,0],"to":[0,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[249.995,125.458],"t":61,"ti":[0,-41.09],"to":[0,41.09]},{"s":[249.995,372],"t":73}],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":6,"parent":5}],"v":"5.4.4","fr":30,"op":141,"ip":0,"assets":[]}'
        ),
        ei = s(2655);
      let eo = [
        { text: "Carregando \xfaltimos logins..." },
        { text: "Carregando directs..." },
        { text: "Carregando \xfaltimas intera\xe7\xf5es..." },
        { text: "Carregando storys ocultos..." },
      ];
      function en(e) {
        let { onComplete: t } = e,
          [s, r] = (0, l.useState)(0);
        return (
          (0, l.useEffect)(() => {
            let e = setInterval(() => {
              r((e) => (e + 1) % eo.length);
            }, 750);
            return () => {
              clearInterval(e);
            };
          }, []),
          (0, l.useEffect)(() => {
            console.log(s, eo.length), s + 1 >= eo.length && t();
          }, [s]),
          (0, a.jsxs)("div", {
            className: "w-full p-[20px] bg-[#272445] rounded-2xl",
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-row",
                children: [
                  (0, a.jsx)("div", {
                    className: "basis-1/4 flex justify-center",
                    children: (0, a.jsx)("div", {
                      style: { width: 30, height: 30 },
                      children: (0, a.jsx)(_.Ip, {
                        value: s,
                        maxValue: eo.length,
                        styles: (0, _.y3)({
                          strokeLinecap: "butt",
                          pathColor: "#00D9CD",
                          trailColor: "#E8EEF4",
                        }),
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "w-full text-[#5C6FFF] font-bold text-lg text-wrap",
                    children: "Descriptografando informa\xe7\xf5es...",
                  }),
                ],
              }),
              eo.map((e, t) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: "flex flex-row py-1",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "basis-1/4 ".concat(
                          t <= s ? "text-[#00D9CD]" : "text-[#D4DCE7]"
                        ),
                        children: [
                          (0, a.jsx)("div", {
                            style: {
                              width: "2px",
                              height: "30px",
                              backgroundColor: "#4e4e6f",
                              margin: "auto",
                            },
                          }),
                          t <= s &&
                            (0, a.jsx)(F.l_A, { className: "mx-auto mt-2" }),
                          t > s &&
                            (0, a.jsx)(ei.SsS, { className: "mx-auto mt-2" }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "text-left w-full text-white",
                        children: [
                          (0, a.jsxs)("h1", {
                            className: "font-bold text-1xl",
                            children: ["Passo ", t + 1],
                          }),
                          (0, a.jsx)("span", {
                            className: "text-sm",
                            children: e.text,
                          }),
                        ],
                      }),
                    ],
                  },
                  t
                )
              ),
            ],
          })
        );
      }
      let ec = (e) => {
          let { onCompleted: t } = e,
            { city: s, setCity: r } = (0, d.W)(),
            [i, o] = (0, l.useState)(0),
            [n, c] = (0, l.useState)(3),
            [x, u] = (0, l.useState)(0),
            [m, p] = (0, l.useState)(0),
            [g, b] = (0, l.useState)(0),
            [v, y] = (0, l.useState)(0),
            [j, k] = (0, l.useState)(0),
            [N, w] = (0, l.useState)(!0);
          (0, h.useTranslations)();
          let _ = async () => {
            try {
              let e = await f.default.get(
                "https://get.geojs.io/v1/ip/geo.json"
              );
              r(e.data.city);
            } catch (e) {
              console.error(e);
            }
          };
          return (
            (0, l.useEffect)(() => {
              _();
            }, []),
            (0, a.jsxs)("div", {
              className: "flex flex-col items-center pr-3 pl-3",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex justify-center items-center",
                  children: [
                    (0, a.jsx)("img", {
                      alt: "lock",
                      src: "/locked.svg",
                      width: 130,
                      className: "absolute ".concat(!N && "hidden"),
                    }),
                    (0, a.jsx)(er.Z, {
                      options: {
                        loop: !0,
                        autoplay: !1,
                        animationData: el,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice",
                        },
                      },
                      isStopped: N,
                      width: 200,
                      height: 200,
                      className: "absolute ".concat(N && "hidden"),
                      eventListeners: [
                        {
                          eventName: "complete",
                          callback: () => {
                            t();
                          },
                        },
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(en, {
                  onComplete: () => {
                    w(!1);
                  },
                }),
              ],
            })
          );
        },
        ed = {
          welcome: {
            component: () => {
              let [e] = (0, S.v1)("f", { defaultValue: "d" }),
                { changeStep: t } = (0, d.W)();
              t("get-username");
              let r = (0, h.useTranslations)(),
                l = {
                  title: ""
                    .concat(r("h1_title.0"), ' <span style="color: #fb923c;">')
                    .concat(r("h1_title.1"), "</span> ")
                    .concat(r("h1_title.2"), ' <span style="color: #fb923c;">')
                    .concat(r("h1_title.3"), "</span>"),
                  boxs: [
                    {
                      text: "Tenha acesso a visualiza\xe7\xe3o de stories da pessoa.",
                    },
                    {
                      text: "Tenha acesso aos arquivados (conversas antigas trancadas)",
                    },
                    {
                      text: 'Tenha acesso ao <b class="text-green-400">DIRECT COMPLETO</b> da pessoa.',
                    },
                    {
                      text: "<b>B\xf4nus</b>: Tenha acesso exclusivo ao <b>CLOSE FRIENDS</b> da pessoa.",
                      news: !0,
                      important: !0,
                    },
                    {
                      text: "Veja com quem essa pessoa conversa mais frequentemente.",
                    },
                    {
                      text: "Veja fotos de visualiza\xe7\xe3o \xfanica que essa pessoa envia ou recebe.",
                    },
                  ],
                  button: "Teste Gr\xe1tis Agora",
                };
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("head", {
                    children: [
                      (0, a.jsx)("title", { children: r("title") }),
                      (0, a.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, user-scalable=no",
                      }),
                      (0, a.jsx)("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes",
                      }),
                      (0, a.jsx)("script", {
                        type: "text/javascript",
                        src: "/static/tiktok.js",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col items-center pr-3 pl-3",
                    style: {
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1) 50%), url(/logo1.svg), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 80%), url(/background.svg)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    },
                    children: [
                      (0, a.jsx)("div", {
                        style: {
                          width: "100%",
                          height: "280px",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        },
                      }),
                      (0, a.jsx)(z, {
                        variant: "default",
                        className: "mb-4",
                        children: "Novo Sistema",
                      }),
                      (0, a.jsxs)("h1", {
                        className:
                          "text-white text-xl -mt-[10px] text-center font-bold font-sans",
                        children: [
                          "Espione ",
                          (0, a.jsx)("b", {
                            className: "text-green-400 uppercase",
                            children: "qualquer insta",
                          }),
                          " apenas com o ",
                          (0, a.jsx)("b", {
                            className: "text-green-400",
                            children: "@",
                          }),
                          " da pessoa.",
                        ],
                      }),
                      (0, a.jsx)(z, {
                        variant: "destructive",
                        className: "mt-5",
                        size: "lg",
                        children: "Por tempo limitado",
                      }),
                      (0, a.jsx)("div", {
                        className: "flex flex-col gap-4 mt-10",
                        children: l.boxs.map((e, t) => {
                          let { text: s, news: l, important: i } = e;
                          return (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "relative flex items-center gap-3 shadow-sm rounded-xl py-[15px] px-[15px] bg-card text-primary-foreground ".concat(
                                  i && "bg-primary text-[#164F20] font-bold"
                                ),
                              children: [
                                l &&
                                  (0, a.jsx)(z, {
                                    variant: "destructive",
                                    className: "absolute right-4 -top-3",
                                    children: r("new"),
                                  }),
                                (0, a.jsx)("img", {
                                  src: i
                                    ? "/verify-foreground.svg"
                                    : "/verify1.svg",
                                  className: "size-10",
                                }),
                                (0, a.jsx)("h3", {
                                  className: "",
                                  dangerouslySetInnerHTML: { __html: s },
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                      (0, a.jsx)(N, {
                        className:
                          "mt-10 w-full py-10 text-xl rounded-2xl font-bold",
                        size: "lg",
                        onClick: () => {
                          t("get-username"),
                            s
                              .e(790)
                              .then(s.t.bind(s, 2790, 23))
                              .then((e) => e.default)
                              .then((e) => {
                                e.fbq("trackCustom", "initial-flow");
                              }),
                            v.ZP.capture("initial-flow");
                        },
                        children: l.button,
                      }),
                    ],
                  }),
                ],
              });
            },
            progress: 33,
          },
          "get-username": {
            component: () => {
              var e, t, r;
              let [i, o] = (0, l.useState)(!1),
                [n, c] = (0, l.useState)(null),
                y = async () => {
                  try {
                    let e = await f.default.get(
                      "https://get.geojs.io/v1/ip/geo.json"
                    );
                    c(e.data.city);
                  } catch (e) {
                    console.error(e);
                  }
                };
              (0, l.useEffect)(() => {
                y();
              }, []);
              let j = (0, h.useTranslations)(),
                k = p.z.object({
                  username: p.z
                    .string({ message: j("errors.0") })
                    .min(1, { message: j("errors.0") })
                    .min(3, { message: j("errors.1") }),
                }),
                { changeStep: _, setUser: S } = (0, d.W)(),
                {
                  handleSubmit: D,
                  register: z,
                  formState: { errors: E },
                } = (0, u.cI)({ resolver: (0, x.F)(k) }),
                A = D(async (e) => {
                  let { username: t } = e;
                  o(!0),
                    s
                      .e(790)
                      .then(s.t.bind(s, 2790, 23))
                      .then((e) => e.default)
                      .then((e) => {
                        e.fbq("trackCustom", "get-username-submitted", {
                          username: t,
                        });
                      }),
                    v.ZP.capture("get-username-submitted", { username: t });
                  try {
                    let e = await g.get("https://www.investigadordoperfil.online/api/get-profile", {
                      params: { username: t },
                    });
                    S(e.data.user), _("profile");
                  } catch (e) {
                    if ((0, b.IZ)(e)) {
                      var a, r, l, i;
                      if (
                        (null === (a = e.response) || void 0 === a
                          ? void 0
                          : a.status) === 404 ||
                        (null === (r = e.response) || void 0 === r
                          ? void 0
                          : r.status) === 500
                      ) {
                        m.Am.error(e.response.data.error, {
                          description:
                            "Usu\xe1rio n\xe3o encontrado, tenha certeza que digitou corretamente.",
                          duration: 8e3,
                        });
                        return;
                      }
                      if (
                        (null === (l = e.response) || void 0 === l
                          ? void 0
                          : l.status) === 429 ||
                        (null === (i = e.response) || void 0 === i
                          ? void 0
                          : i.status) === 400
                      ) {
                        m.Am.error(e.response.data.error, { duration: 8e3 }),
                          _("pay");
                        return;
                      }
                    }
                    m.Am.error(
                      "Tente novamente, estamos com algumas instabilidades."
                    ),
                      console.log(e);
                  } finally {
                    o(!1);
                  }
                });
              return i
                ? (0, a.jsx)(C, {})
                : (0, a.jsxs)("div", {
                    style: {
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center 30px",
                      paddingTop: "200px",
                    },
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "flex -mt-[180px] items-center justify-center",
                        children: (0, a.jsx)("div", {
                          className: "flex",
                          children: (0, a.jsx)("img", {
                            src: "/espia.png",
                            width: 200,
                          }),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        style: {
                          backgroundImage: "url(/bg-3.png)",
                          backgroundSize: "cover",
                        },
                        className:
                          " px-8 pb-6 m-4 pt-[50px] text-center text-[#344356] relative rounded-tl-[50px] rounded-tr-[50px]",
                        children: [
                          (0, a.jsxs)("p", {
                            className:
                              "text-3xl font-semibold  text-white my-8 border-b pb-8 border-[#545454]",
                            children: [
                              "Espione ",
                              (0, a.jsxs)("span", {
                                className: "text-[#8492FF]",
                                children: [
                                  "qualquer",
                                  (0, a.jsx)("br", {}),
                                  " pessoa",
                                ],
                              }),
                              " apenas",
                              (0, a.jsx)("br", {}),
                              "com o ",
                              (0, a.jsx)("b", { className: "", children: "@" }),
                            ],
                          }),
                          (0, a.jsxs)("p", {
                            className:
                              "text-xl font-semibold  text-white my-8 ",
                            children: [
                              "Coloque o ",
                              (0, a.jsx)("span", {
                                className: "text-[#00D9CD]",
                                children: "@",
                              }),
                              " da pessoa que voc\xea quer espionar",
                            ],
                          }),
                          (0, a.jsxs)("form", {
                            onSubmit: A,
                            autoComplete: "off",
                            autoCorrect: "off",
                            autoCapitalize: "off",
                            children: [
                              (0, a.jsx)(w, {
                                autoComplete: "false",
                                name: "hidden",
                                type: "text",
                                style: { display: "none" },
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "border-[#00D9CD] border p-1 flex justify-between items-center rounded-2xl data-[error=true]:border-b data-[error=true]:border-red-500",
                                "data-error": !!(null === (e = E.username) ||
                                void 0 === e
                                  ? void 0
                                  : e.message),
                                children: [
                                  (0, a.jsx)(w, {
                                    ...z("username"),
                                    id: "texttt",
                                    placeholder: "Ex.: neymarjr",
                                    "data-error": !!(null ===
                                      (t = E.username) || void 0 === t
                                      ? void 0
                                      : t.message),
                                    className:
                                      "text-white text-md px-6 data-[error=true]:border-red-500 border-none autofill:!bg-yellow-200",
                                    style: { WebkitTextFillColor: "#d5d5d5" },
                                    autoComplete: "new-password",
                                    spellCheck: !1,
                                    inputMode: "text",
                                    autoCapitalize: "off",
                                    autoCorrect: "off",
                                    type: "search",
                                    "data-1p-ignore": !0,
                                    "data-lpignore": "true",
                                  }),
                                  (0, a.jsx)(N, {
                                    className:
                                      "text-xl text-black bg-[#00D9CD] rounded-xl font-bold",
                                    size: "sm",
                                    children: i
                                      ? j("loading")
                                      : (0, a.jsx)(F.U41, {}),
                                  }),
                                ],
                              }),
                              (null === (r = E.username) || void 0 === r
                                ? void 0
                                : r.message) &&
                                (0, a.jsx)("div", {
                                  className:
                                    "text-red-500 text-sm text-left mt-1 ml-1",
                                  children: E.username.message || "",
                                }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex items-center justify-center mb-12 p-4 ",
                            children: [
                              (0, a.jsx)("img", {
                                className: "mr-2",
                                src: "/locker.png",
                                width: 20,
                                height: 20,
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-sm text-[#848484] my-4 text-left",
                                children:
                                  "Dados seguros, a pessoa n\xe3o saber\xe1 que voc\xea tentou espionar ela.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
            },
            progress: 45,
          },
          profile: {
            component: () => {
              let {
                  changeStep: e,
                  user: t,
                  setFollowers: r,
                  setStories: i,
                } = (0, d.W)(),
                [o, n] = (0, l.useState)(!1),
                [c, x] = (0, l.useState)("idle"),
                [u, p] = (0, l.useState)(!1);
              if (!t) return null;
              let h = async () => {
                n(!0),
                  x("loading"),
                  s
                    .e(790)
                    .then(s.t.bind(s, 2790, 23))
                    .then((e) => e.default)
                    .then((e) => {
                      e.fbq("trackCustom", "get-followers", {
                        username: t.username,
                        is_private: t.isPrivate,
                      });
                    }),
                  v.ZP.capture("get-followers", {
                    username: t.username,
                    is_private: t.isPrivate,
                  });
                try {
                  let e = await g.get("https://www.investigadordoperfil.online/api/get-followers", {
                    params: { username: t.id, is_private: t.isPrivate },
                  });
                  r(e.data.followers), i(e.data.stories), x("success");
                } catch (e) {
                  console.log(e),
                    m.Am.error(
                      "Tente novamente, estamos com algumas instabilidades."
                    ),
                    x("error");
                }
              };
              return ((0, l.useEffect)(() => {
                "success" === c && e("preview");
              }, [c]),
              "loading" === c)
                ? (0, a.jsx)(ec, { onCompleted: () => p(!0) })
                : (0, a.jsxs)("div", {
                    className: "pr-3 pl-3",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "w-[260px] h-[260px] rounded-full mx-auto !bg-zinc-800 flex flex-col items-center justify-center mt-[50px]",
                        children: (0, a.jsx)("img", {
                          alt: "",
                          width: "250",
                          height: "250",
                          decoding: "async",
                          "data-nimg": "1",
                          className:
                            "border-4 select-none pointer-events-none border-white min-w-[250px] w-[250px] !min-h-[250px] !h-[250px] rounded-full",
                          src:
                            "https://images.weserv.nl/?url=" +
                            (function (e) {
                              let t = "https://images.weserv.nl/?url=";
                              return e.startsWith(t)
                                ? e.substring(t.length)
                                : /^[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*$/.test(
                                    e
                                  )
                                ? encodeURIComponent(e)
                                : e;
                            })(t.hd_profile_pic_url_info.url),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "items-center mx-auto rounded-full border font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/30 cursor-default flex p-[5px] text-base px-[29px] bg-green-100 text-green-700 w-fit mt-[30px]",
                        children: ["@", t.username],
                      }),
                      (0, a.jsx)("h1", {
                        className: "text-3xl mt-[20px] text-center font-bold",
                        children: t.fullName,
                      }),
                      (0, a.jsx)("p", {
                        className: "text-xl mt-4 text-center",
                        children: "Podemos presseguir?",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col justify-center mt-10 gap-2",
                        children: [
                          (0, a.jsx)(N, {
                            className:
                              "w-full py-7 text-xl rounded-xl font-bold",
                            size: "lg",
                            onClick: h,
                            children: "Continuar, o perfil est\xe1 correto",
                          }),
                          (0, a.jsx)(N, {
                            className: " mx-auto rounded-xl font-bold",
                            size: "lg",
                            variant: "ghost",
                            onClick: () => {
                              e("get-username"),
                                s
                                  .e(790)
                                  .then(s.t.bind(s, 2790, 23))
                                  .then((e) => e.default)
                                  .then((e) => {
                                    e.fbq("trackCustom", "back-to-get-profile");
                                  });
                            },
                            children: "N\xe3o, quero corrigir",
                          }),
                        ],
                      }),
                    ],
                  });
            },
            progress: 66,
          },
          processing: {
            component: () => (0, a.jsx)("div", { children: "processing" }),
            progress: 83,
          },
          preview: {
            component: () => {
              let {
                followers: e,
                changeStep: t,
                user: r,
                stories: i,
                city: o,
              } = (0, d.W)();
              ea(e);
              let n = (0, h.useTranslations)(),
                [c, x] = (0, l.useState)(!1);
              (0, l.useEffect)(() => {
                window.scrollTo(0, 0);
              }, []);
              let u = e.slice(0, 5);
              return (
                e.slice(5),
                (0, a.jsxs)("div", {
                  className: "flex flex-col items-center pr-3 pl-3",
                  children: [
                    (0, a.jsxs)("h1", {
                      className: "text-4xl mt-[30px] text-center font-bold ",
                      children: [
                        (0, a.jsx)("b", {
                          className: "text-[#5468FF]",
                          children: "Pr\xe9via",
                        }),
                        " do seu @",
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "items-center rounded font-bold text-center bg-[#272445] p-5 mt-5",
                      children: [
                        "Pr\xe9via dispon\xedvel",
                        (0, a.jsx)("br", {}),
                        " por ",
                        (0, a.jsx)("b", {
                          className: "text-[#FF5489]",
                          children: "apenas 24h",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("h3", {
                      className: "text-2xl mt-[20px] text-center font-bold ",
                      children: [
                        "Pessoas que ela mais ",
                        (0, a.jsx)("b", {
                          className: "text-[#5468FF]",
                          children: "interage",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "mt-8",
                      children: (0, a.jsx)(q, {
                        opts: { align: "center", loop: !0 },
                        className: "w-full max-w-sm pointer-events-none",
                        plugins: [(0, P.Z)({ delay: 2e3 })],
                        children: (0, a.jsx)(M, {
                          className: "flex -ml-4",
                          children: u.map((e) => {
                            let {
                              full_name: t,
                              profile_pic_url: s,
                              id: r,
                              username: l,
                            } = e;
                            return (0, a.jsx)(
                              V,
                              {
                                className: "pl-4 basis-1/2",
                                children: (0, a.jsx)("div", {
                                  className:
                                    "p-1 pointer-events-none select-none",
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "rounded-lg bg-card text-card-foreground shadow-sm w-full min-h-[250px]",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "flex flex-col space-y-1.5 !p-[0px] !rounded-t-xl",
                                        children: (0, a.jsx)("img", {
                                          alt: "",
                                          width: "200",
                                          height: "200",
                                          className:
                                            "w-full !rounded-t-lg h-full",
                                          src: s,
                                        }),
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "text-[#344356] p-6 text-center flex flex-col items-center px-[13px] pt-[15px] pb-[15px]",
                                        children: [
                                          (0, a.jsx)("h4", {
                                            className:
                                              "text-xl font-bold break-all !text-wrap truncate line-clamp-1",
                                            children: es(t),
                                          }),
                                          (0, a.jsx)("small", {
                                            className:
                                              "text-center mt-4 font-medium truncate break-all !text-wrap  line-clamp-1 w-[100px]:",
                                            children: "@".concat(es(l)),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              r
                            );
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsxs)("h1", {
                      className: "text-2xl mt-[50px] text-center",
                      children: [
                        "Detectamos ",
                        (0, a.jsx)("b", {
                          className: "text-[#5468FF]",
                          children: "conversas pessoais",
                        }),
                        " dessa pessoa",
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "text-gray-400 text-center mt-5 mb-5",
                      children:
                        "Nossa intelig\xeancia artificial identificou algumas conversas mais pessoais.",
                    }),
                    i.length > 0
                      ? (0, a.jsx)(H, {})
                      : (0, a.jsx)(Z, {
                          name: (null == r ? void 0 : r.fullName)
                            ? r.fullName.split(" ")[0]
                            : "Gustavo",
                          city: o,
                        }),
                    (0, a.jsxs)("h1", {
                      className: "text-2xl mt-[100px] text-center",
                      children: [
                        "Detectamos ",
                        (0, a.jsx)("b", {
                          className: "text-[#5468FF]",
                          children: "\xe1udios em algumas conversas...",
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "text-gray-400 text-center mt-1 mb-5",
                      children:
                        "Para desbloquear esses e outros \xe1udios e conversas adquira nossa ferramenta.",
                    }),
                    r &&
                      (0, a.jsx)(O, {
                        image: r.hd_profile_pic_url_info.url,
                        city: o,
                      }),
                    (0, a.jsxs)("h3", {
                      className: "text-2xl mt-[100px] mb-3 text-center",
                      children: [
                        "Escute agora o ",
                        (0, a.jsx)("b", {
                          className: "text-[#5468FF]",
                          children: "\xe1udio",
                        }),
                        " que a pessoa que voc\xea quer espionar recebeu:",
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "text-gray-400 text-center mt-1",
                      children: "Toque no player para escutar.",
                    }),
                    (0, a.jsx)(Q, {
                      onAudioFinish: () => {
                        x(!0);
                      },
                    }),
                    (0, a.jsx)("img", {
                      src: "/PUP.svg",
                      className: "mt-5 ".concat(!c && "hidden"),
                      draggable: !1,
                    }),
                    (0, a.jsxs)("h3", {
                      className: "text-2xl mt-[100px] text-center",
                      children: [
                        "Por dentro do ",
                        (0, a.jsx)("b", {
                          className: "text-[#5468FF]",
                          children: "close friends",
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "text-gray-400 text-center mt-1",
                      children:
                        "Para desbloquear acesso total do CF da pessoa espionada adquira nosso sistema.",
                    }),
                    (0, a.jsx)("div", {
                      className: "mt-8",
                      children: (0, a.jsx)(q, {
                        opts: { align: "center", loop: !0 },
                        className: "w-full max-w-sm pointer-events-none",
                        plugins: [(0, P.Z)({ delay: 5e3 })],
                        children: (0, a.jsx)(M, {
                          className: "flex -ml-4",
                          children: et.map((e, t) => {
                            var s;
                            let { thumbnail_url: l } = e,
                              i = Math.floor(Math.random() * J.length);
                            J[i], K[Math.floor(Math.random() * K.length)];
                            let o = et.length >= 2 ? "basis-1/2" : "basis-full";
                            return (0, a.jsx)(
                              V,
                              {
                                className: "pl-4 " + o,
                                children: (0, a.jsxs)("div", {
                                  className:
                                    "min-h-[150px] !rounded-t-lg overflow-hidden !rounded-b-lg  relative",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "absolute pointer-events-none opacity-30 w-full h-[50px] z-2 top-0 !rounded-b-lg bg-gradient-to-t to-zinc-900 via-zinc-900/70 from-transparent",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex absolute !z-4 top-[12px] left-[12px] items-center space-x-2",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "min-w-[31px] w-[31px] !min-h-[31px] !h-[31px] rounded-full flex justify-center items-center ",
                                          style: { border: "thin solid #0f0" },
                                          children: (0, a.jsx)("div", {
                                            className:
                                              "min-w-[25px] w-[25px] !min-h-[25px] !h-[25px]  rounded-full ",
                                            style: {
                                              backgroundImage: (
                                                null == r
                                                  ? void 0
                                                  : null ===
                                                      (s =
                                                        r.hd_profile_pic_url_info) ||
                                                    void 0 === s
                                                  ? void 0
                                                  : s.url
                                              )
                                                ? "url(https://images.weserv.nl/?url=".concat(
                                                    (function (e) {
                                                      let t =
                                                        "https://images.weserv.nl/?url=";
                                                      return e.startsWith(t)
                                                        ? e.substring(t.length)
                                                        : /^[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*$/.test(
                                                            e
                                                          )
                                                        ? encodeURIComponent(e)
                                                        : e;
                                                    })(
                                                      r.hd_profile_pic_url_info
                                                        .url
                                                    ),
                                                    ")"
                                                  )
                                                : void 0,
                                              backgroundSize: "cover",
                                              backgroundPosition:
                                                "center center",
                                            },
                                          }),
                                        }),
                                        (0, a.jsx)("span", {
                                          className:
                                            "text-white shadow-[#181818/50] !drop-shadow-md   font-normal text-[11px]",
                                          children:
                                            null == r ? void 0 : r.username,
                                        }),
                                        (0, a.jsx)("img", {
                                          src: "/cf-icon.svg",
                                          width: 35,
                                          style: { marginLeft: "25px" },
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "stories w-[200px] h-[300px] rounded-xl",
                                      style: {
                                        backgroundImage: "url('".concat(
                                          l,
                                          "')"
                                        ),
                                        backgroundSize: "cover",
                                        backgroundPosition: "center center",
                                        backgroundRepeat: "no-repeat",
                                      },
                                    }),
                                  ],
                                }),
                              },
                              null == r ? void 0 : r.id
                            );
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsxs)("h3", {
                      className: "text-2xl mt-[100px] mb-3 text-center",
                      children: [
                        "Tenha acesso em ",
                        (0, a.jsx)("b", {
                          className: "text-[#5468FF]",
                          children: "TEMPO REAL",
                        }),
                        " a localiza\xe7\xe3o do dispositivo da pessoa.",
                      ],
                    }),
                    (0, a.jsx)("img", {
                      src: "/maps.svg",
                      className: "mt-2",
                      draggable: !1,
                    }),
                    (0, a.jsxs)("h3", {
                      className: "text-2xl mt-[100px] mb-3 text-center",
                      children: [
                        "Alguns arquivos de m\xeddia como ",
                        (0, a.jsx)("b", {
                          className: "text-[#5468FF]",
                          children: "fotos e v\xeddeos",
                        }),
                        " foram encontrados em algumas conversas.",
                      ],
                    }),
                    (0, a.jsx)("img", { src: "/gallery.png", draggable: !1 }),
                    (0, a.jsxs)(N, {
                      className:
                        "w-full py-10 text-xl rounded-2xl font-bold bottom-2 z-1 mt-3",
                      size: "lg",
                      onClick: () => {
                        t("pay"),
                          s
                            .e(790)
                            .then(s.t.bind(s, 2790, 23))
                            .then((e) => e.default)
                            .then((e) => {
                              e.fbq("trackCustom", "clicked-report-button");
                            }),
                          v.ZP.capture("clicked-report-button");
                      },
                      children: [
                        (0, a.jsx)(W.Z, { className: "mr-3 size-6" }),
                        " ",
                        n("preview.fullReportButton.text"),
                      ],
                    }),
                  ],
                })
              );
            },
            progress: 90,
          },
          pay: {
            component: () => {
              let e = (0, E.usePathname)(),
                [t, r] = (0, l.useState)(28800),
                { funil: i, user: o } = (0, d.W)(),
                n = (0, h.useTranslations)(),
                [c, x] = (0, l.useState)(!1),
                [u, m] = (0, l.useState)(23);
              (0, l.useEffect)(() => {
                let e;
                return (
                  u > 4 &&
                    (e = setInterval(() => {
                      m((e) => e - 1);
                    }, 15e3)),
                  () => clearInterval(e)
                );
              }, [u]),
                (0, l.useEffect)(() => {
                  let e = setInterval(() => {
                      r((e) => (e > 0 ? e - 1 : 0));
                    }, 1e3),
                    t = setTimeout(() => {
                      x(!0);
                    }, 7e3);
                  return () => {
                    clearInterval(e), clearTimeout(t);
                  };
                }, []);
              let p = (e) => {
                let t = Math.floor(e / 60),
                  s = Math.floor(t / 60);
                return [s, t - 60 * s, e % 60];
              };
              return ((0, l.useEffect)(() => {
                window.scrollTo(0, 0);
              }, []),
              i)
                ? (0, a.jsxs)("div", {
                    className:
                      "flex flex-col items-center pr-3 pl-3 pb-[100px]",
                    style: {
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(23, 21, 49, 1) 30%), url(/confetti.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "repeat",
                      backgroundPosition: "center center",
                    },
                    children: [
                      c &&
                        (0, a.jsx)("div", {
                          className:
                            "fixed text-gray-600  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                          children: (0, a.jsxs)("div", {
                            className:
                              "bg-white rounded-lg p-6 shadow-lg w-96 text-center",
                            children: [
                              (0, a.jsxs)("p", {
                                className: "mb-6",
                                children: [
                                  "Voc\xea enviou solicita\xe7\xe3o de relat\xf3rio do perfil ",
                                  (0, a.jsx)("b", {
                                    children: (null == o ? void 0 : o.username)
                                      ? "@".concat(
                                          null == o ? void 0 : o.username
                                        )
                                      : "para essa pessoa",
                                  }),
                                  ".",
                                ],
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "p-2 bg-[#344356] rounded-2xl text-white",
                                children:
                                  "Se voc\xea sair dessa p\xe1gina voc\xea corre o risco do investigado ser notificado.",
                              }),
                              (0, a.jsx)("p", {
                                className: "mt-5",
                                children:
                                  "Tenha acesso completo e veja tudo em tempo real",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "flex w-full justify-center gap-4 mt-5",
                                children: (0, a.jsx)("a", {
                                  className:
                                    "items-center uppercase justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4  py-[40px] text-xl font-bold flex bg-primary rounded-2xl w-full",
                                  href: null == i ? void 0 : i.checkout_url,
                                  onClick: (t) => {
                                    s
                                      .e(790)
                                      .then(s.t.bind(s, 2790, 23))
                                      .then((e) => e.default)
                                      .then((e) => {
                                        e.track("InitiateCheckout", {
                                          value: i.preco,
                                          currency: n("currency"),
                                          content_type: "product",
                                          content_ids: ["relatorio-completo"],
                                        });
                                      }),
                                      v.ZP.capture("InitiateCheckout", {
                                        value: i.preco,
                                        currency: n("currency"),
                                        content_type: "product",
                                        content_ids: ["relatorio-completo"],
                                        path: e,
                                      });
                                  },
                                  children: "Adquira Agora",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "flex justify-center gap-4 mt-5",
                                children: (0, a.jsx)("button", {
                                  onClick: () => {
                                    x(!1);
                                  },
                                  className:
                                    "px-4 py-2 text-red-500 rounded-xl transition",
                                  children: "Agora n\xe3o",
                                }),
                              }),
                            ],
                          }),
                        }),
                      (0, a.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, a.jsx)("img", {
                            src: "/congratulations.png",
                            alt: "",
                            width: 350,
                            height: 350,
                            draggable: !1,
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "w-full text-center absolute bottom-[5px]",
                            children: [
                              (0, a.jsx)("h1", {
                                className: "text-3xl font-bold text-[#00D9CD]",
                                children:
                                  "Parab\xe9ns seu relat\xf3rio foi gerado com sucesso! ",
                              }),
                              (0, a.jsxs)("h3", {
                                className: "",
                                children: [
                                  (0, a.jsx)("b", {
                                    className: "text-[#FF3333]",
                                    children: "ATEN\xc7\xc3O",
                                  }),
                                  " Liberamos apenas um relat\xf3rio por dispositivo.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "flex flex-col gap-4 mt-10",
                        children: [
                          {
                            text: "Tenha acesso a visualiza\xe7\xe3o de stories da pessoa.",
                          },
                          {
                            text: "Tenha acesso aos arquivados (conversas antigas trancadas)",
                          },
                          {
                            text: 'Tenha acesso ao <b class="text-green-400">DIRECT COMPLETO</b> da pessoa.',
                          },
                          {
                            text: "B\xf4nus: Tenha acesso exclusivo ao <b>CLOSE FRIENDS</b> da pessoa.",
                            news: !0,
                            important: !0,
                          },
                          {
                            text: "Veja com quem essa pessoa conversa mais frequentemente.",
                          },
                          {
                            text: "Veja fotos de visualiza\xe7\xe3o \xfanica que essa pessoa envia ou recebe.",
                          },
                        ].map((e, t) => {
                          let { text: s, news: r, important: l } = e;
                          return (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "relative flex items-center gap-3 shadow-sm rounded-xl py-[15px] px-[15px] bg-[#272445] ".concat(
                                  l && "bg-[#7BFF66] text-[#164F20] font-bold"
                                ),
                              children: [
                                r &&
                                  (0, a.jsx)(z, {
                                    variant: "destructive",
                                    className: "absolute right-4 -top-3",
                                    children: n("new"),
                                  }),
                                (0, a.jsx)("img", {
                                  src: l
                                    ? "/verify-foreground.svg"
                                    : "/champion.svg",
                                  className: "size-10",
                                }),
                                (0, a.jsx)("h3", {
                                  className: "",
                                  dangerouslySetInnerHTML: { __html: s },
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                      (0, a.jsx)("p", {
                        className: "my-8 text-center",
                        dangerouslySetInnerHTML: {
                          __html: n("pay.messages.uniqueFeature", {
                            _b: "<b>",
                            e_b: "</b>",
                          }),
                        },
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "bg-[#85C763] p-4 pb-6 rounded-xl pt-10 relative mt-[70px] text-[#344356]",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "size-16 bg-white border-[#85C763] border-[12px] rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2",
                            children: (0, a.jsx)("div", {
                              className:
                                "w-[40px] h-[40px] bg-cover bg-center bg-origin-border border-[#85C763] border-4",
                              style: {
                                backgroundImage: "url('/cf-logo-1.png')",
                              },
                            }),
                          }),
                          (0, a.jsx)("h2", {
                            className:
                              "text-2xl mb-5 font-bold text-center text-[#2F5825] font-bold ",
                            children: "BONUS EXCLUSIVO",
                          }),
                          (0, a.jsxs)("p", {
                            className:
                              "text-center mb-3 text-[#0B2010] font-bold ",
                            children: [
                              "Adquirindo agora voc\xea pode ter a oportunidade de receber acesso ao ",
                              (0, a.jsx)("b", { children: "CloseX" }),
                              ", uma ferramenta que faz com que voc\xea tenha ao ",
                              (0, a.jsx)("b", {
                                children: "CLOSE FRIENDS DE QUALQUER PESSOA!",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(z, {
                        variant: "destructive",
                        className: "mt-10 rounded-lg",
                        size: "lg",
                        children: n("pay.warning"),
                      }),
                      (0, a.jsx)("p", {
                        className: "mt-8 text-center",
                        dangerouslySetInnerHTML: {
                          __html: n("pay.instaWarning", {
                            _b: "<b>",
                            e_b: "</b>",
                          }),
                        },
                      }),
                      (0, a.jsx)("p", {
                        className: "mt-2 text-center font-bold",
                        children: n("pay.urgentCall"),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "py-1 px-10 rounded-sm bg-[#FF2733] text-white font-bold mt-10 uppercase",
                        children: "Feedbacks",
                      }),
                      (0, a.jsx)(q, {
                        opts: { align: "center", loop: !0 },
                        className: "w-full max-w-sm pointer-events-none",
                        plugins: [(0, P.Z)({ delay: 5e3 })],
                        children: (0, a.jsx)(M, {
                          className: "flex -ml-4",
                          children: [
                            { thumbnail_url: "/feedback.png" },
                            { thumbnail_url: "/feedback_1.png" },
                            { thumbnail_url: "/feedback_2.png" },
                            { thumbnail_url: "/feedback_3.png" },
                            { thumbnail_url: "/feedback_4.png" },
                          ].map((e, t) => {
                            let { thumbnail_url: s } = e;
                            return (0, a.jsx)(
                              V,
                              {
                                className: "pl-4 basis-full",
                                children: (0, a.jsx)("img", {
                                  src: s,
                                  width: 300,
                                  className: "shadow-md mt-4 mx-auto",
                                }),
                              },
                              null == o ? void 0 : o.id
                            );
                          }),
                        }),
                      }),
                      (0, a.jsxs)("p", {
                        className:
                          "my-2 text-center mt-5 text-lg font-semibold",
                        children: [
                          "Nossa ferramenta \xe9 ",
                          (0, a.jsx)("b", {
                            className: "text-green-400",
                            children: "limitada",
                          }),
                          " ao p\xfablico, poucas pessoas conseguem ter acesso...",
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "py-1 px-10 rounded-sm bg-[#FF2733] text-white font-bold mt-5 text-center",
                        children: [
                          "Apenas ",
                          u,
                          " vagas liberadas para ",
                          new Date().toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "bg-card shadow-sm rounded-xl justify-center w-full flex flex-wrap items-start px-[20px] mt-[50px] py-[25px]",
                        children: [
                          (0, a.jsx)("h3", {
                            className:
                              "text-1xl mb-3 text-center text-[#344356] font-bold",
                            children: "Oferta por tempo limitado:",
                          }),
                          (0, a.jsxs)("div", {
                            className: "w-full flex justify-center",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "size-16 bg-[#FF7C83] rounded-xl mx-2 text-center drop-shadow-2xl",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "text-4xl font-extrabold mt-1",
                                    children: p(t)[0],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "bottom-2 text-center text-xs",
                                    children: "horas",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "size-16 bg-[#FF7C83] rounded-xl mx-2 text-center drop-shadow-2xl",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "text-4xl font-extrabold mt-1",
                                    children: p(t)[1],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "bottom-2 text-center text-xs",
                                    children: "minutos",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "size-16 bg-[#FF7C83] rounded-xl mx-2 text-center drop-shadow-2xl",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "text-4xl font-extrabold mt-1",
                                    children: p(t)[2],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "bottom-2 text-center text-xs",
                                    children: "segundos",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("h3", {
                            className:
                              "text-2md mt-10 mb-3 text-center text-[#344356] font-bold",
                            children: [
                              "Receba ",
                              (0, a.jsx)("b", {
                                className: "text-[#5468FF]",
                                children:
                                  "acesso a ferramenta espi\xe3 completa e veja informa\xe7\xf5es",
                              }),
                              " da conta de qualquer pessoa.",
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex-col flex items-center relative",
                            children: [
                              (0, a.jsx)("small", {
                                className:
                                  "text-center text-base font-bold text-[#FF7C83] line-through",
                                children: n("pay.report.originalPrice", {
                                  originalPrice: (i.preco / 0.3).toFixed(0),
                                }),
                              }),
                              (0, a.jsxs)("h2", {
                                className:
                                  " font-mono text-[#344356] text-center text-8xl mt-1  font-extrabold ",
                                children: [
                                  (0, a.jsx)("b", {
                                    className: "text-[#5468FF] text-5xl",
                                    children: "R$",
                                  }),
                                  39 == i.preco ? i.preco : i.preco.toFixed(2),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute -left-2 top-12 inline-flex items-center rounded-xl border px-2.5 py-0.5 pt-1 text-xs font-semibold transition-colors bg-[#FF2733] text-primary-foreground mb-3",
                                children: n("pay.report.discount"),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "w-full bottom-2 mt-5",
                            children: [
                              (0, a.jsx)(A.default, {
                                src: "https://cdn.utmify.com.br/scripts/utms/latest.js",
                                "data-utmify-prevent-subids": !0,
                                "data-utmify-fast-start": !0,
                                async: !0,
                                defer: !0,
                              }),
                              (0, a.jsx)("a", {
                                className:
                                  "items-center uppercase justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4  py-[40px] text-xl font-bold flex bg-primary rounded-2xl w-full",
                                href: null == i ? void 0 : i.checkout_url,
                                onClick: (t) => {
                                  s
                                    .e(790)
                                    .then(s.t.bind(s, 2790, 23))
                                    .then((e) => e.default)
                                    .then((e) => {
                                      e.track("InitiateCheckout", {
                                        value: i.preco,
                                        currency: n("currency"),
                                        content_type: "product",
                                        content_ids: ["relatorio-completo"],
                                      });
                                    }),
                                    v.ZP.capture("InitiateCheckout", {
                                      value: i.preco,
                                      currency: n("currency"),
                                      content_type: "product",
                                      content_ids: ["relatorio-completo"],
                                      path: e,
                                    });
                                },
                                children: "Acessar Agora",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : null;
            },
            progress: 100,
          },
        },
        ex = () => {
          let { step: e, funil: t } = (0, d.W)(),
            r = ed[e],
            i = r.component || (() => (0, a.jsx)(a.Fragment, {})),
            [o, n] = (0, l.useState)(!0);
          return (
            (0, l.useEffect)(() => {
              if (!(null == t ? void 0 : t.pixel)) return;
              let e = () => {
                window.scrollY > 30 ? n(!0) : n(!1);
              };
              return (
                window.addEventListener("scroll", e),
                s
                  .e(790)
                  .then(s.t.bind(s, 2790, 23))
                  .then((e) => e.default)
                  .then((e) => {
                    e.init(t.pixel), e.pageView();
                  }),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, a.jsxs)("div", {
              className: "".concat(
                r == ed["get-username"] ? "pt-8" : "py-8",
                " w-full"
              ),
              children: [
                (0, a.jsx)("div", {
                  className: "w-full flex justify-center px-7",
                  children: (0, a.jsx)(c, {
                    value: r.progress,
                    className: "h-[10px] flex-1",
                  }),
                }),
                (0, a.jsx)(i, {}),
              ],
            })
          );
        };
    },
    4969: function (e, t, s) {
      "use strict";
      s.d(t, {
        W: function () {
          return a;
        },
      });
      let a = (0, s(9099).Ue)((e) => ({
        step: "welcome",
        funil: null,
        user: null,
        stories: [],
        followers: [],
        city: "sua cidade",
        setStories: (t) => e({ stories: t }),
        changeStep: (t) => e({ step: t }),
        setUser: (t) => e({ user: t }),
        setFollowers: (t) => e({ followers: t }),
        setFunil: (t) => e({ funil: t }),
        setCity: (t) => e({ city: t }),
      }));
    },
    2488: function (e) {
      e.exports = {
        container: "CircularProgressWithImage_container__GY6LC",
        progressCircle: "CircularProgressWithImage_progressCircle__S9tF9",
        progressFill: "CircularProgressWithImage_progressFill__G3vXz",
        innerCircle: "CircularProgressWithImage_innerCircle__h7LOy",
        image: "CircularProgressWithImage_image__xh_eT",
      };
    },
    4545: function (e) {
      e.exports = {
        items: "audio_items__emUWT",
        circleBackAudio: "audio_circleBackAudio__ZbM67",
        audio: "audio_audio__JPeMN",
        avisoAudio: "audio_avisoAudio__3XbEM",
        pauseIcon: "audio_pauseIcon__VASOS",
        playIcon: "audio_playIcon__bCln_",
        PlayBtn: "audio_PlayBtn__UEQOq",
        isPlaying: "audio_isPlaying__oYXrF",
        waveform: "audio_waveform__YalT2",
        AudioIcon: "audio_AudioIcon__TZBfD",
        muted: "audio_muted__PszMs",
        mutarDesmutar: "audio_mutarDesmutar__ah13y",
        circle01: "audio_circle01__wa0BY",
        pulse: "audio_pulse__vdjy6",
        circle02: "audio_circle02__SbO_L",
        circle03: "audio_circle03__iM_hr",
        pulseBack: "audio_pulseBack__r7jJU",
      };
    },
  },
]);
