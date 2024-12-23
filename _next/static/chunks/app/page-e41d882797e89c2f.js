(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        35883: function () {},
        46601: function () {},
        52361: function () {},
        94616: function () {},
        84173: function (e, t, a) {
            Promise.resolve().then(a.bind(a, 98140))
        },
        98140: function (e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function () {
                    return ev
                }
            });
            var n = a(57437),
                s = a(8792),
                i = a(2265),
                r = e => {
                    let {
                        toggleMenu: t,
                        toggleExchangeModal: a,
                        walletAddress: i,
                        onConnectWallet: r,
                        onDisconnectWallet: l
                    } = e;
                    return (0, n.jsx)("header", {
                        className: "header",
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [(0, n.jsx)(s.default, {
                                href: "https://www.blendr.network/",
                                children: (0, n.jsxs)("div", {
                                    className: "logo",
                                    children: [(0, n.jsx)("img", {
                                        src: "/assets/img/logo-img.webp",
                                        alt: ""
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: "toggle-menu",
                                onClick: t,
                                children: (0, n.jsx)("span", {})
                            }), (0, n.jsxs)("nav", {
                                className: "menu",
                                children: [(0, n.jsxs)("ul", {
                                    className: "links",
                                    children: [(0, n.jsx)("li", {
                                        children: (0, n.jsxs)("a", {
                                            href: "https://etherscan.io/token/0x00000000000000000000000000000#code",
                                            target: "_blank",
                                            children: [(0, n.jsx)("span", {
                                                children: "Contract"
                                            }), (0, n.jsx)("span", {
                                                "data-text": "Contract"
                                            })]
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsxs)("a", {
                                            href: "https://twitter.com/BlendrNetwork",
                                            target: "_blank",
                                            children: [(0, n.jsxs)("span", {
                                                children: ["X ", (0, n.jsx)("span", {
                                                    className: "op",
                                                    children: "/ Twitter"
                                                })]
                                            }), (0, n.jsxs)("span", {
                                                children: ["X ", (0, n.jsx)("span", {
                                                    className: "op",
                                                    children: "/ Twitter"
                                                })]
                                            })]
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsxs)("a", {
                                            href: "https://blendr-network.gitbook.io/blendr-network-technical-plan-docs",
                                            target: "_blank",
                                            children: [(0, n.jsx)("span", {
                                                children: "Documentation"
                                            }), (0, n.jsx)("span", {
                                                "data-text": "Documentation"
                                            })]
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsxs)(s.default, {
                                            href: "/",
                                            children: [(0, n.jsx)("span", {
                                                children: "Stake"
                                            }), (0, n.jsx)("span", {
                                                "data-text": "Stake"
                                            })]
                                        })
                                    })]
                                }), (0, n.jsxs)("ul", {
                                    className: "btns",
                                    children: [(0, n.jsx)("li", {
                                        children: (0, n.jsxs)("a", {
                                            className: "btn btn-blue js_modal",
                                            onClick: a,
                                            children: [(0, n.jsx)("span", {
                                                children: "$BLOCKIFY"
                                            }), (0, n.jsx)("span", {
                                                "data-text": "$BLOCKIFY"
                                            })]
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsxs)("a", {
                                            className: "btn btn-grey js_modal",
                                            onClick: () => {
                                                i ? l() : r(!0)
                                            },
                                            children: [(0, n.jsx)("span", {
                                                children: i ? "DISCONNECT" : "CONNECT WALLET"
                                            }), (0, n.jsx)("span", {
                                                "data-text": i ? "DISCONNECT" : "CONNECT WALLET"
                                            })]
                                        })
                                    })]
                                })]
                            }), (0, n.jsx)("div", {
                                className: "menu-fader"
                            })]
                        })
                    })
                },
                l = () => (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("footer", {
                        className: "footer",
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [(0, n.jsxs)("div", {
                                className: "logo",
                                children: [(0, n.jsx)("img", {
                                    src: "/assets/img/logo-img.webp",
                                    alt: ""
                                })]
                            }), (0, n.jsxs)("nav", {
                                className: "foot-menu",
                                children: [(0, n.jsxs)("ul", {
                                    children: [(0, n.jsx)("li", {
                                        children: (0, n.jsx)("a", {
                                            href: "https://drive.google.com/file/d/1gI0NL8koLs1UGBmxPjpmP57VI0Ata8ez/view?pli=1",
                                            target: "_blank",
                                            children: "Whitepaper"
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsx)("a", {
                                            href: "https://etherscan.io/token/0x00000000000000000000000000000#code",
                                            target: "_blank",
                                            children: "Contract"
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsx)("a", {
                                            href: "https://blendr-network.gitbook.io/blendr-network-technical-plan-docs",
                                            target: "_blank",
                                            children: "Documentation"
                                        })
                                    })]
                                }), (0, n.jsx)("ul", {
                                    children: (0, n.jsx)("li", {
                                        children: (0, n.jsx)("a", {
                                            className: "js_modal",
                                            href: "#buy",
                                            children: "$BLOCKIFY"
                                        })
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "bottom",
                                children: [(0, n.jsxs)("ul", {
                                                                    }), (0, n.jsx)("div", {
                                    children: "Copyright \xa9 2024 Blockify. All rights reserved."
                                })]
                            })]
                        })
                    })
                });
            let d = e => {
                let {
                    isOpen: t,
                    handleClose: a
                } = e;
                return (0, n.jsxs)("div", {
                    className: "modal ".concat(t ? "open" : ""),
                    id: "buy",
                    children: [(0, n.jsx)("h2", {
                        className: "title",
                        children: "$BLOCKIFY"
                    }), (0, n.jsxs)("ul", {
                        className: "buy-btns",
                        children: [(0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                                className: "btn btn-grey",
                                href: "https://app.uniswap.org/swap?outputCurrency=0x00000000000000000000000000000",
                                target: "_blank",
                                children: [(0, n.jsx)("span", {
                                    children: "Uniswap"
                                }), (0, n.jsx)("span", {
                                    "data-text": "Uniswap"
                                })]
                            })
                        }), (0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                                className: "btn btn-grey",
                                href: "https://www.dextools.io/app/en/ether/pool-explorer/0x11111111111111111111111111111111111111",
                                target: "_blank",
                                children: [(0, n.jsx)("span", {
                                    children: "Chart"
                                }), (0, n.jsx)("span", {
                                    "data-text": "Gate.io"
                                })]
                            })
                        })]
                    }), (0, n.jsx)("div", {
                        onClick: a,
                        className: "close"
                    })]
                })
            };
            var o = a(21040),
                c = a(48796),
                p = a(76039);
            let u = "0xC4259323F4d70F764B02FE5648de208b8caF2e6b",
                y = "https://etherscan.io";
            var m = JSON.parse('{"M":[{"type":"constructor","inputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"UPGRADE_INTERFACE_VERSION","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"calculateAPY","inputs":[{"name":"durationDays","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"claimFixedStakeReward","inputs":[{"name":"stakeIndex","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"claimReward","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"createFixedStake","inputs":[{"name":"amount","type":"uint256","internalType":"uint256"},{"name":"durationDays","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"emergencyWithdraw","inputs":[{"name":"token","type":"address","internalType":"contract IERC20"},{"name":"to","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"fixedStakes","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"amount","type":"uint256","internalType":"uint256"},{"name":"startDate","type":"uint256","internalType":"uint256"},{"name":"endDate","type":"uint256","internalType":"uint256"},{"name":"duration","type":"uint256","internalType":"uint256"},{"name":"apy","type":"uint256","internalType":"uint256"},{"name":"reward","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"flexibleApy","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"flexibleStakes","inputs":[{"name":"","type":"address","internalType":"address"}],"outputs":[{"name":"totalStaked","type":"uint256","internalType":"uint256"},{"name":"totalRewards","type":"uint256","internalType":"uint256"},{"name":"lastUpdate","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getUserFixedStakes","inputs":[{"name":"user","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"tuple[]","internalType":"struct StakingPlatform.FixedStake[]","components":[{"name":"amount","type":"uint256","internalType":"uint256"},{"name":"startDate","type":"uint256","internalType":"uint256"},{"name":"endDate","type":"uint256","internalType":"uint256"},{"name":"duration","type":"uint256","internalType":"uint256"},{"name":"apy","type":"uint256","internalType":"uint256"},{"name":"reward","type":"uint256","internalType":"uint256"}]}],"stateMutability":"view"},{"type":"function","name":"getUserFlexibleInfo","inputs":[{"name":"user","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"tuple","internalType":"struct StakingPlatform.FlexibleStake","components":[{"name":"totalStaked","type":"uint256","internalType":"uint256"},{"name":"totalRewards","type":"uint256","internalType":"uint256"},{"name":"lastUpdate","type":"uint256","internalType":"uint256"}]}],"stateMutability":"view"},{"type":"function","name":"initialize","inputs":[{"name":"_stakingToken","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"isFixedStakingEnabled","inputs":[],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"isFlexibleStakingEnabled","inputs":[],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"maxFixedAPY","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"maxFixedDurationDays","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"minFixedAPY","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"minFixedDurationDays","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"penaltyRate","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"proxiableUUID","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"renounceOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setAPY","inputs":[{"name":"newAPY","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setFixedAPYRange","inputs":[{"name":"minAPY","type":"uint256","internalType":"uint256"},{"name":"maxAPY","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setFixedDurationDays","inputs":[{"name":"minDays","type":"uint256","internalType":"uint256"},{"name":"maxDays","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setFixedStakingStatus","inputs":[{"name":"enabled","type":"bool","internalType":"bool"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setFlexibleStakingStatus","inputs":[{"name":"enabled","type":"bool","internalType":"bool"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setPenaltyRate","inputs":[{"name":"rate","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setStakingToken","inputs":[{"name":"_stakingToken","type":"address","internalType":"contract IERC20"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"stake","inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"stakingToken","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IERC20"}],"stateMutability":"view"},{"type":"function","name":"transferOwnership","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"unstake","inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"upgradeToAndCall","inputs":[{"name":"newImplementation","type":"address","internalType":"address"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"payable"},{"type":"function","name":"withdrawFixedStake","inputs":[{"name":"stakeIndex","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"event","name":"Initialized","inputs":[{"name":"version","type":"uint64","indexed":false,"internalType":"uint64"}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"RewardClaimed","inputs":[{"name":"user","type":"address","indexed":true,"internalType":"address"},{"name":"reward","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"RewardClaimedFixedStake","inputs":[{"name":"user","type":"address","indexed":true,"internalType":"address"},{"name":"stakeId","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"reward","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Staked","inputs":[{"name":"user","type":"address","indexed":true,"internalType":"address"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"StakedFixed","inputs":[{"name":"user","type":"address","indexed":true,"internalType":"address"},{"name":"stakeId","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"duration","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Unstaked","inputs":[{"name":"user","type":"address","indexed":true,"internalType":"address"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Upgraded","inputs":[{"name":"implementation","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"WithdrawFixedStake","inputs":[{"name":"user","type":"address","indexed":true,"internalType":"address"},{"name":"stakeId","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"penalty","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"AddressEmptyCode","inputs":[{"name":"target","type":"address","internalType":"address"}]},{"type":"error","name":"AddressInsufficientBalance","inputs":[{"name":"account","type":"address","internalType":"address"}]},{"type":"error","name":"ERC1967InvalidImplementation","inputs":[{"name":"implementation","type":"address","internalType":"address"}]},{"type":"error","name":"ERC1967NonPayable","inputs":[]},{"type":"error","name":"FailedInnerCall","inputs":[]},{"type":"error","name":"InvalidInitialization","inputs":[]},{"type":"error","name":"NotInitializing","inputs":[]},{"type":"error","name":"OwnableInvalidOwner","inputs":[{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"OwnableUnauthorizedAccount","inputs":[{"name":"account","type":"address","internalType":"address"}]},{"type":"error","name":"ReentrancyGuardReentrantCall","inputs":[]},{"type":"error","name":"SafeERC20FailedOperation","inputs":[{"name":"token","type":"address","internalType":"address"}]},{"type":"error","name":"UUPSUnauthorizedCallContext","inputs":[]},{"type":"error","name":"UUPSUnsupportedProxiableUUID","inputs":[{"name":"slot","type":"bytes32","internalType":"bytes32"}]}]}'),
                x = JSON.parse('{"M":[{"type":"constructor","inputs":[{"name":"name","type":"string","internalType":"string"},{"name":"symbol","type":"string","internalType":"string"}],"stateMutability":"nonpayable"},{"type":"function","name":"allowance","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"approve","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view"},{"type":"function","name":"mint","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transfer","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"spender","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"ERC20InsufficientAllowance","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"allowance","type":"uint256","internalType":"uint256"},{"name":"needed","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC20InsufficientBalance","inputs":[{"name":"sender","type":"address","internalType":"address"},{"name":"balance","type":"uint256","internalType":"uint256"},{"name":"needed","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC20InvalidApprover","inputs":[{"name":"approver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidReceiver","inputs":[{"name":"receiver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidSender","inputs":[{"name":"sender","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidSpender","inputs":[{"name":"spender","type":"address","internalType":"address"}]}]}'),
                h = a(15051);
            let w = null,
                f = null,
                b = async () => {
                    let e = window.ethereum;
                    if (void 0 === e) throw Error("MetaMask is not installed");
                    if ((await e.request({
                            method: "eth_accounts"
                        })).length > 0) return f = new h.Q(e), w = await f.getSigner(), await w.getAddress();
                    try {
                        return await e.request({
                            method: "eth_chainId"
                        }) !== "0x1" && await e.request({
                            method: "wallet_switchEthereumChain",
                            params: [{
                                chainId: "0x1"
                            }]
                        }), await e.request({
                            method: "eth_requestAccounts"
                        }), f = new h.Q(e), w = await f.getSigner(), await w.getAddress()
                    } catch (e) {
                        throw console.log("error : ", e), Error("Error connecting to MetaMask")
                    }
                }, g = async () => {
                    let e = window.ethereum;
                    if ((await e.request({
                            method: "eth_accounts"
                        })).length > 0) return f = new h.Q(e), w = await f.getSigner(), await w.getAddress();
                    if (!(e && e.isTrust)) throw Error("Trust Wallet not detected.");
                    return await e.request({
                        method: "eth_requestAccounts"
                    }), f = new h.Q(e), w = await f.getSigner(), await w.getAddress()
                }, j = async e => (f = new h.Q(e), w = await f.getSigner(), await w.getAddress()), v = async () => (f || await b(), f), N = async () => {
                    if (!w) throw Error("Signer is not initialized");
                    return w
                }, k = async () => {
                    let e = await N();
                    return new p.CH(u, m.M, e)
                }, T = async () => {
                    let e = await N();
                    return new p.CH("0x84018071282d4B2996272659D9C01cB08DD7327F", x.M, e)
                };
            var A = a(99232);
            let S = e => parseFloat(A.dF(e)).toFixed(0),
                C = (e, t, a) => Number.isNaN(e) || Number.isNaN(t) ? "0" : (t * e / 100 * a * 86400 / 31536e3).toFixed(2),
                F = e => "".concat(e.slice(0, 6), "...").concat(e.slice(-4)),
                I = (e, t, a, n, s) => e <= t ? n.toFixed(0) : e >= a ? s.toFixed(0) : (n + (s - n) * (e - t) / (a - t)).toFixed(0),
                E = e => {
                    let t = Math.floor(e / 30),
                        a = e % 30;
                    return t > 0 ? a > 0 ? "".concat(t, " months and ").concat(a, " days") : "".concat(t, " months") : "".concat(e, " days")
                },
                M = async e => {
                    let t = await T();
                    return parseFloat(S(await t.balanceOf(e)))
                };
            var R = a(90304);
            let D = async e => {
                let t = await k();
                return await t.claimFixedStakeReward(e)
            }, U = async e => {
                let t = await k();
                return await t.withdrawFixedStake(e)
            }, Q = async () => {
                let e = await k();
                return parseInt(await e.flexibleApy())
            }, L = async e => {
                let t = await k();
                return await t.getUserFlexibleInfo(e)
            }, P = async e => {
                let t = await k();
                return await t.getUserFixedStakes(e)
            }, B = async () => {
                let e = await k();
                return parseInt(await e.minFixedDurationDays())
            }, _ = async () => {
                let e = await k();
                return parseInt(await e.maxFixedDurationDays())
            }, Y = async () => {
                let e = await k();
                return parseInt(await e.minFixedAPY())
            }, W = async () => {
                let e = await k();
                return parseInt(await e.maxFixedAPY())
            }, O = async e => {
                let t = await v(),
                    a = await k();
                if (!t) throw Error("Provider not initialized");
                let n = {
                        address: u,
                        fromBlock: 0,
                        toBlock: "latest",
                        topics: [null, R.U3(e, 32)]
                    },
                    s = await t.getLogs(n);
                return V(await Promise.all(s.map(async e => {
                    let n = a.interface.parseLog(e),
                        s = await t.getBlock(e.blockNumber);
                    if (!s) return {
                        ...n,
                        date: 0
                    };
                    let i = new Date(1e3 * s.timestamp);
                    return {
                        ...n,
                        date: i
                    }
                })))
            }, V = e => e.map(e => {
                try {
                    let {
                        name: t,
                        args: a
                    } = e, n = {};
                    switch (t) {
                        case "Staked":
                        case "Unstaked":
                        case "RewardClaimed":
                            n = {
                                user: a[0],
                                amount: S(a[1]),
                                reward: "RewardClaimed" === t ? S(a[2]) : void 0,
                                date: e.date
                            };
                            break;
                        case "StakedFixed":
                        case "UnstakedFixed":
                        case "RewardClaimedFixed":
                            n = {
                                user: a[0],
                                stakeId: a[1],
                                amount: S(a[2]),
                                duration: "StakedFixed" === t ? a[3] : void 0,
                                penalty: "UnstakedFixed" === t ? S(a[3]) : void 0,
                                reward: "RewardClaimedFixed" === t ? S(a[2]) : void 0,
                                date: e.date
                            };
                            break;
                        default:
                            return console.warn("Unhandled log type: ".concat(t)), !1
                    }
                    return {
                        name: t,
                        ...n
                    }
                } catch (e) {
                    return !1
                }
            }).filter(e => !1 !== e);
            var z = a(34734),
                X = a(51367);
            let H = e => e.map(e => {
                    let t = Math.floor(Date.now() / 1e3),
                        a = parseInt(e.endDate) - t;
                    return {
                        amount: S(e.amount),
                        apy: e.apy.toString(),
                        duration: e.duration.toString(),
                        endDate: e.endDate.toString(),
                        reward: parseFloat(S(e.reward)).toFixed(2),
                        startDate: e.startDate.toString(),
                        secondsLeft: a.toString(),
                        action: a <= 0 ? "claim" : "withdraw"
                    }
                }),
                G = e => Math.floor(e / 86400),
                q = e => {
                    let t = Math.floor(e / 86400),
                        a = Math.floor(e % 86400 / 3600),
                        n = Math.floor(e % 3600 / 60);
                    return t > 0 ? "".concat(t, " day").concat(1 !== t ? "s" : "") : a > 0 ? "".concat(a, " hour").concat(1 !== a ? "s" : "") : n > 0 ? "".concat(n, " minute").concat(1 !== n ? "s" : "") : "".concat(e, " second").concat(1 !== e ? "s" : "")
                };
            var J = a(68842);
            let K = (0, i.createContext)({
                    walletAddress: "",
                    balance: 0,
                    connectWallet: async e => {},
                    handleUserFixedStakes: async () => {},
                    handleWarning: async () => {},
                    logoutWallet: () => {},
                    fixedStakeInfo: {
                        minFixedDays: 0,
                        maxFixedDays: 0,
                        minFixedAPY: 0,
                        maxFixedAPY: 0
                    },
                    flexibleStakeInfo: {
                        flexibleApy: 0
                    },
                    userFlexibleInfo: {
                        lastUpdate: "0",
                        totalRewards: "0",
                        totalStaked: "0"
                    },
                    userFixedStakes: [],
                    showWarning: !1
                }),
                Z = () => (0, i.useContext)(K),
                $ = e => {
                    let {
                        children: t
                    } = e, [a, s] = (0, i.useState)(""), [r, l] = (0, i.useState)(0), [d, o] = (0, i.useState)({
                        lastUpdate: "0",
                        totalRewards: "0",
                        totalStaked: "0"
                    }), [c, p] = (0, i.useState)({
                        minFixedDays: 0,
                        maxFixedDays: 0,
                        minFixedAPY: 0,
                        maxFixedAPY: 0
                    }), [u, y] = (0, i.useState)({
                        flexibleApy: 0
                    }), [m, x] = (0, i.useState)([]), [h, w] = (0, i.useState)(!1), {
                        open: f
                    } = (0, J.k_)(), {
                        walletProvider: v
                    } = (0, J.B0)(), {
                        address: N,
                        chainId: k,
                        isConnected: T
                    } = (0, J.Zc)(), {
                        disconnect: A
                    } = (0, J.qL)(), C = async e => {
                        try {
                            if ("metamask" === e) {
                                let e = await b();
                                s(e)
                            } else if ("trustwallet" === e) {
                                let e = await g();
                                s(e)
                            } else if ("walletconnect" === e) {
                                if (await f(), !T) throw Error("User disconnected");
                                if (void 0 == v) throw Error("provider not found");
                                let e = await j(v);
                                s(e)
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    }, F = async () => {
                        A(), s("")
                    }, I = async () => {
                        localStorage.setItem("messageShown", "true"), w(!1)
                    };
                    (0, i.useEffect)(() => {
                        (async () => {
                            T && s(await j(v))
                        })()
                    }, [N]), (0, i.useEffect)(() => {
                        "true" === localStorage.getItem("messageShown") ? w(!1) : w(!0)
                    }, []);
                    let E = async () => {
                        console.log("getWalletData : "), console.log("walletAddress : ", a);
                        let e = await Q(),
                            t = await M(a),
                            n = await L(a),
                            s = await B(),
                            i = await _(),
                            r = await Y(),
                            d = await W(),
                            c = await P(a);
                        console.log("resBalance : ", t), l(t), o({
                            lastUpdate: S(n.lastUpdate),
                            totalRewards: S(n.totalRewards),
                            totalStaked: S(n.totalStaked)
                        }), p({
                            minFixedDays: s,
                            maxFixedDays: i,
                            minFixedAPY: r,
                            maxFixedAPY: d
                        }), y({
                            flexibleApy: e
                        }), x(H(c))
                    }, R = async () => {
                        x(H(await P(a)))
                    };
                    return (0, i.useEffect)(() => {
                        (async () => {
                            try {
                                a && await E()
                            } catch (e) {
                                console.log(e)
                            }
                        })()
                    }, [a]), (0, i.useEffect)(() => {
                        (async () => {
                            try {
                                let e = window.ethereum;
                                void 0 !== e && e.on("accountsChanged", e => {
                                    e.length > 0 && s(e[0])
                                })
                            } catch (e) {
                                throw Error("Error getting changed account!")
                            }
                        })()
                    }, []), (0, n.jsx)(K.Provider, {
                        value: {
                            fixedStakeInfo: c,
                            flexibleStakeInfo: u,
                            userFixedStakes: m,
                            walletAddress: a,
                            balance: r,
                            userFlexibleInfo: d,
                            showWarning: h,
                            connectWallet: C,
                            handleUserFixedStakes: R,
                            handleWarning: I,
                            logoutWallet: F
                        },
                        children: t
                    })
                };
            var ee = a(20703),
                et = e => {
                    let {
                        connectWallet: t,
                        setShowConnectWalletModal: a
                    } = e;
                    return (0, n.jsx)("div", {
                        className: "fixed text-white top-0 left-0 w-screen h-screen bg-[#040718]/90 z-10 flex justify-center items-center",
                        onClick: () => a(!1),
                        children: (0, n.jsxs)("div", {
                            className: "rounded-3xl w-full max-w-[416px] bg-[#050F2D] px-4 walletPop py-8 border border-solid border-gray-700 ml-2 mr-2",
                            onClick: e => {
                                e.stopPropagation()
                            },
                            children: [(0, n.jsx)("div", {
                                className: "flex items-center justify-end",
                                children: (0, n.jsx)(ee.default, {
                                    src: "/assets/img/stake/close.png",
                                    alt: "",
                                    width: 36,
                                    height: 36,
                                    className: "cursor-pointer hover:opacity-75",
                                    onClick: () => a(!1)
                                })
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col space-y-12 items-center",
                                children: [(0, n.jsx)(ee.default, {
                                    src: "/assets/img/stake/walletLogo.png",
                                    alt: "",
                                    width: 64,
                                    height: 64
                                }), (0, n.jsx)("div", {
                                    className: "font-bold text-white text-4xl",
                                    children: "Connect to Blendr"
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col gap-2 px-4 w-full",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex flex-row hover:opacity-75 items-center rounded-2xl justify-between gap-2 cursor-pointer px-4 py-5 bg-[#171A22]",
                                        onClick: () => {
                                            t("metamask"), a(!1)
                                        },
                                        children: [(0, n.jsx)("span", {
                                            children: "Metamask"
                                        }), (0, n.jsx)("img", {
                                            src: "/assets/img/stake/metamask.png",
                                            className: "w-8",
                                            alt: ""
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex items-center hover:opacity-75 justify-between gap-2 rounded-2xl cursor-pointer px-4 py-5 bg-[#171A22]",
                                        onClick: () => {
                                            t("walletconnect"), a(!1)
                                        },
                                        children: [(0, n.jsx)("span", {
                                            children: "WalletConnect"
                                        }), (0, n.jsx)("img", {
                                            src: "/assets/img/stake/wallet-connect.png",
                                            className: "w-8",
                                            alt: ""
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "text-center text-white px-6 text-sm",
                                    children: [(0, n.jsxs)("span", {
                                        className: "opacity-50",
                                        children: ["By connecting your wallet, you agree to our", " "]
                                    }), "Terms of Service ", (0, n.jsx)("span", {
                                        className: "opacity-50",
                                        children: "and our"
                                    }), "\xa0 Privacy Policy"]
                                })]
                            })]
                        })
                    })
                },
                ea = a(42858);
            let en = e => {
                let {
                    children: t
                } = e, {
                    handleWarning: a,
                    showWarning: s,
                    logoutWallet: p,
                    walletAddress: u,
                    connectWallet: y
                } = Z(), [m, x] = (0, i.useState)(!1), [h, w] = (0, i.useState)(!1), [f, b] = (0, i.useState)(!1), [g, j] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    document.documentElement.classList.add("ready");
                    let e = () => {
                            x(window.scrollY > 0), document.querySelectorAll(".js_detect-scroll").forEach(e => {
                                window.scrollY + window.innerHeight - 100 > e.getBoundingClientRect().top + window.scrollY && e.classList.add("visible")
                            }), document.querySelectorAll(".js_scroll-progress").forEach(e => {
                                let t = (window.scrollY + window.innerHeight - e.getBoundingClientRect().top - window.scrollY) / (window.innerHeight / 2);
                                e.setAttribute("style", "--percent: ".concat(t <= 0 ? 0 : t > 0 && t < 1 ? t : 1))
                            })
                        },
                        t = () => {
                            e()
                        };
                    return window.addEventListener("scroll", e), window.addEventListener("resize", t), e(), () => {
                        window.removeEventListener("scroll", e), window.removeEventListener("resize", t), document.documentElement.classList.remove("ready")
                    }
                }, []);
                let v = async e => {
                    try {
                        await y(e)
                    } catch (e) {
                        (0, ea.yv)(e.message, {
                            variant: "error"
                        })
                    }
                }, N = async () => {
                    try {
                        await p()
                    } catch (e) {
                        (0, ea.yv)(e.message, {
                            variant: "error"
                        })
                    }
                };
                return (0, n.jsxs)("div", {
                    id: "mainContainer",
                    className: "".concat(m ? "scrolled" : "", " ").concat(h ? "open-menu" : "", " ").concat(f ? "open-modal" : "", "\n   "),
                    children: [g && (0, n.jsx)(et, {
                        connectWallet: v,
                        setShowConnectWalletModal: j
                    }), s && (0, n.jsxs)("div", {
                        className: "bg-slate-800 p-3 flex justify-between w-full items-center text-stone-300",
                        children: [(0, n.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, n.jsx)(c.SVk, {
                                color: "yellow",
                                size: 20
                            }), (0, n.jsxs)("p", {
                                className: "text-base",
                                children: ["Confirm you are at", " ", (0, n.jsx)("span", {
                                    className: "font-bold",
                                    children: "http://app.blockify.pro/"
                                }), " ", "by typing the address into your browser and confirming the validity of the SSL certificate"]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "cursor-pointer",
                            onClick: a,
                            children: (0, n.jsx)(o.ZCS, {
                                size: 20
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "mainwrap",
                        children: [(0, n.jsx)(r, {
                            toggleExchangeModal: () => b(!f),
                            toggleMenu: () => {
                                w(!h)
                            },
                            walletAddress: u,
                            onConnectWallet: j,
                            onDisconnectWallet: N
                        }), t, (0, n.jsx)(l, {}), (0, n.jsx)("div", {
                            onClick: () => b(!1),
                            className: "modal-fader"
                        }), (0, n.jsx)(d, {
                            isOpen: f,
                            handleClose: () => b(!1)
                        })]
                    })]
                })
            };
            var es = a(25587);
            let ei = () => (0, n.jsxs)("div", {
                className: "pt-24 xl:pb-24 pb-16 flex justify-center flex-col space-y-4 items-center",
                children: [(0, n.jsxs)(es.E.div, {
                    className: "flex flex-col space-y-4 justify-center items-center",
                    initial: {
                        opacity: 0,
                        y: "40%"
                    },
                    whileInView: {
                        opacity: 1,
                        y: "0"
                    },
                    transition: {
                        duration: 1,
                        delay: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: [(0, n.jsx)(ee.default, {
                        src: "/assets/img/stake/logo.png",
                        alt: "",
                        width: 180,
                        height: 180,
                        className: ""
                    }), (0, n.jsx)("p", {
                        className: "font-semibold text-white text-4xl",
                        children: "Join our Сommunity"
                    }), (0, n.jsxs)("p", {
                        className: "text-lg text-white opacity-50 text-center",
                        children: ["Grow the community with the Edenomyshlins.", (0, n.jsx)("br", {}), " Participate in challenges and contests."]
                    })]
                }), (0, n.jsxs)(es.E.div, {
                    className: "flex flex-row items-center justify-center space-x-4 pt-4",
                    initial: {
                        opacity: 0,
                        y: "30%"
                    },
                    whileInView: {
                        opacity: 1,
                        y: "0"
                    },
                    transition: {
                        duration: 1,
                        delay: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: [(0, n.jsx)("button", {
                        className: "text-center text-white py-4 md:px-16 px-12  rounded-full hover:opacity-75 shrkbutton",
                        children: (0, n.jsx)("a", {
                            href: "https://t.me/",
                            target: "_blank",
                            children: "Telegram"
                        })
                    }), (0, n.jsx)("button", {
                        className: "text-center text-white py-4 md:px-16 px-12 rounded-full hover:opacity-75 shrkbutton",
                        children: (0, n.jsxs)("a", {
                            href: "https://twitter.com/",
                            target: "_blank",
                            children: ["X\xa0", (0, n.jsx)("span", {
                                className: "opacity-50",
                                children: "/\xa0Twitter"
                            })]
                        })
                    })]
                })]
            });
            var er = a(6128),
                el = () => (0, n.jsx)("div", {
                    className: "flex justify-center items-center",
                    children: (0, n.jsx)(er.Z7b, {
                        className: "w-5 h-5 animate-spin text-sky-500"
                    })
                }),
                ed = e => {
                    let {
                        index: t,
                        stake: a,
                        onWithdraw: s,
                        onClaim: i,
                        withdrawLoading: r,
                        claimLoading: l
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: "rounded-lg bg-zinc-900 px-5 py-3",
                        children: [(0, n.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, n.jsxs)("p", {
                                className: "uppercase text-sm",
                                children: [a.amount, " BLOCKIFY"]
                            }), " ", (0, n.jsxs)("p", {
                                className: "uppercase text-sm",
                                children: ["+", a.reward]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, n.jsxs)("p", {
                                className: "text-sm opacity-50",
                                children: [" ", a.secondsLeft <= 0 ? "Withdraw anytime" : "".concat(G(a.duration), " days")]
                            }), " ", (0, n.jsx)("p", {
                                className: "text-sm text-[#6CFFCA]",
                                children: "".concat(null == a ? void 0 : a.apy, "%")
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "flex justify-between mt-10",
                            children: [(0, n.jsxs)("div", {
                                className: "text-left",
                                children: [(0, n.jsx)("p", {
                                    className: "text-sm opacity-50",
                                    children: "Remaining"
                                }), " ", (0, n.jsx)("p", {
                                    className: "text-sm",
                                    children: a.secondsLeft <= 0 ? "-" : q(a.secondsLeft)
                                })]
                            }), "claim" === a.action ? (0, n.jsx)("button", {
                                onClick: () => i(t),
                                className: "py-1 px-6 inline-flex text-black items-center text-sm font-semibold rounded-full border border-transparent bg-emerald-300 hover:bg-emerald-400 disabled:opacity-50 disabled:pointer-events-none",
                                children: l.index === t && l.status ? (0, n.jsx)(el, {}) : "Claim"
                            }) : (0, n.jsxs)("div", {
                                className: "flex flex-col items-end",
                                children: [(0, n.jsx)("button", {
                                    onClick: () => s(t),
                                    className: "py-1 px-6 inline-flex text-red-600 items-center text-sm font-semibold rounded-full border border-transparent bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:pointer-events-none",
                                    children: r.index === t && r.status ? (0, n.jsx)(el, {}) : "Withdraw"
                                }), (0, n.jsx)("span", {
                                    className: "text-xs mt-2 text-center opacity-40",
                                    children: "Withdrawing now will forfeit your rewards"
                                })]
                            })]
                        })]
                    })
                },
                eo = () => {
                    let {
                        walletAddress: e,
                        userFixedStakes: t,
                        connectWallet: a,
                        handleUserFixedStakes: s
                    } = Z(), [r, l] = (0, i.useState)(!1), [d, o] = (0, i.useState)({
                        status: !1,
                        index: 0
                    }), [c, p] = (0, i.useState)({
                        status: !1,
                        index: 0
                    }), u = async e => {
                        o({
                            status: !0,
                            index: e
                        });
                        try {
                            let t = await D(e);
                            await t.wait() && (await s(), (0, ea.yv)("Successfully claimed", {
                                variant: "success"
                            }))
                        } catch (t) {
                            let e = t.message.split('(reason="');
                            if (e && (null == e ? void 0 : e.length) > 1) {
                                let t = e[1].split('"')[0];
                                (0, ea.yv)(t, {
                                    variant: "error"
                                })
                            } else(0, ea.yv)("Couldn't claim!", {
                                variant: "error"
                            })
                        }
                        o({
                            status: !1,
                            index: e
                        })
                    }, m = async e => {
                        p({
                            status: !0,
                            index: e
                        });
                        try {
                            let t = await U(e);
                            await t.wait() && (await s(), (0, ea.yv)("Successfully withdraw", {
                                variant: "success"
                            }))
                        } catch (t) {
                            let e = t.message.split('(reason="');
                            if (e && (null == e ? void 0 : e.length) > 1) {
                                let t = e[1].split('"')[0];
                                (0, ea.yv)(t, {
                                    variant: "error"
                                })
                            } else(0, ea.yv)("Couldn't withdraw!", {
                                variant: "error"
                            })
                        }
                        p({
                            status: !1,
                            index: e
                        })
                    }, x = async e => {
                        try {
                            await a(e)
                        } catch (e) {
                            (0, ea.yv)(e.message, {
                                variant: "error"
                            })
                        }
                    };
                    return (0, n.jsxs)(n.Fragment, {
                        children: [r && (0, n.jsx)(et, {
                            connectWallet: x,
                            setShowConnectWalletModal: l
                        }), (0, n.jsxs)(es.E.div, {
                            className: "rounded-[40px] border border-solid xl:space-y-8 space-y-4 md:w-[500px] border-gray-600 p-12 flex flex-col bg-[#000000] ml-2 mr-2",
                            initial: {
                                opacity: 0,
                                y: "-20%"
                            },
                            whileInView: {
                                opacity: 1,
                                y: "0"
                            },
                            transition: {
                                duration: .5,
                                delay: 0
                            },
                            viewport: {
                                once: !0
                            },
                            children: [(0, n.jsxs)("div", {
                                className: "flex flex-row items-center space-x-6 justify-between",
                                children: [(0, n.jsx)("p", {
                                    className: "uppercase text-xl",
                                    children: "Unstake"
                                }), e && (0, n.jsx)("div", {
                                    className: "rounded-full cursor-pointer uppercase text-white text-xl font-semibold px-5 py-3 bg-gray-800 hover:bg-gray-800",
                                    onClick: () => e && window.open("".concat(y, "/address/").concat(e), "_blank", "noopener,noreferrer"),
                                    children: (0, n.jsxs)("div", {
                                        className: "text-sm",
                                        children: [" ", "".concat(F(e))]
                                    })
                                })]
                            }), !e && (0, n.jsx)("button", {
                                className: "rounded-full py-4 bg-white text-black w-full text-center hover:opacity-75",
                                onClick: () => l(!0),
                                children: "Connect wallet"
                            }), (0, n.jsx)("div", {
                                className: "flex flex-col gap-3",
                                children: e && t && 0 === t.length ? (0, n.jsx)("p", {
                                    className: "text-enter text-xl opacity-50",
                                    children: "No stakes currently active!"
                                }) : t.map((e, t) => (0, n.jsx)(ed, {
                                    index: t,
                                    withdrawLoading: c,
                                    claimLoading: d,
                                    onWithdraw: m,
                                    onClaim: u,
                                    stake: e
                                }, t))
                            })]
                        })]
                    })
                },
                ec = {
                    src: "/_next/static/media/redArrow.95bcbb5a.png",
                    height: 24,
                    width: 24,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAeFBMVEX+QLz+QJf+QI/+QIj+QIf+QIb+QIX+QIT+QIP+QIL+QH/+QH7+P4P+QHL+QGn+QAD+QJT+QIX+QIT+QIX+QIT+QIn+QIf+QIL+QIb+QIL+QIX+QIT+QIb+QIT+QIb+QIP+QIX+QIT+QIX+QIX+QIX+QIX+QIT+QIVRFipfAAAAKHRSTlMAAAAAAAAAAAAAAAAAAAAAAQICAwMFBQUSEhUVFhYcHFRUc3ePlJW/gj7xtgAAAEZJREFUeNoFQIcRgCAMfAWSKHZR7L3svyEHFcOQtilUlC9TV1iQ7s/39wJqzXB/s6Cm7RmPlaGqa2dPAnaluEQyMNuGWSQAh+EDzwVjfsIAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                ep = {
                    src: "/_next/static/media/greenArrow.3a1fe804.png",
                    height: 24,
                    width: 24,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAeklEQVR42pWNwQ2DQAwEL4muAa/hRVtUkke6CA/sRKkhUrCdAmgN6YQ4CV7Ma+3RatMeuF7rdZS3LU8lV8jGXERIB9M7np9LbYa2MO35LwSXgSfpyt/WOY5Xw64Kkwf/lFZZJ8jfGS4zuwpce3wlpz0UQ+YYG7i06QwLMzQntERkUF0AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                eu = e => {
                    let {
                        item: t
                    } = e, a = (0, i.useMemo)(() => "string" == typeof t.amount ? t.amount : "number" == typeof t.amount ? S(t.amount.toFixed(0)) : 0, [t.amount]), s = new Date(t.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        day: "numeric",
                        year: "numeric"
                    });
                    return (0, n.jsxs)("div", {
                        className: "flex flex-row items-center justify-between",
                        children: [(0, n.jsxs)("div", {
                            className: "flex flex-row items-center space-x-2 xl:space-x-4",
                            children: [(0, n.jsx)("div", {
                                className: "rounded-full items-center flex p-2 bg-gray-800",
                                children: (0, n.jsx)(ee.default, {
                                    src: "StakedFixed" === t.name || "Staked" === t.name ? ec : ep,
                                    width: 24,
                                    height: 24,
                                    alt: ""
                                })
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col text-left",
                                children: [(0, n.jsx)("p", {
                                    className: "text-lg text-white",
                                    children: "RewardClaimedFixed" === t.name ? "Claimed" : t.name
                                }), (0, n.jsx)("p", {
                                    className: "text-xs opacity-50 text-white",
                                    children: s
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "flex flex-col space-y-1 items-center",
                            children: (0, n.jsx)("p", {
                                className: "text-lg text-[#6CFFCA]",
                                children: a
                            })
                        })]
                    })
                },
                ey = e => {
                    let {
                        setSelectedTab: t
                    } = e, {
                        walletAddress: a,
                        balance: s
                    } = Z(), [r, l] = (0, i.useState)(!1), [d, o] = (0, i.useState)(null), [c, p] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        (async () => {
                            try {
                                p(!0);
                                let e = await O(a);
                                e && o(e)
                            } catch (e) {
                                (0, ea.yv)("Couldn't fetch history", {
                                    variant: "error"
                                })
                            }
                            p(!1)
                        })()
                    }, [a]), (0, n.jsxs)("div", {
                        className: "flex flex-col space-y-8 md:w-[500px]",
                        children: [(0, n.jsx)("div", {
                            className: "flex flex-col border border-solid rounded-[40px] border-gray-300",
                            children: (0, n.jsxs)("div", {
                                className: "rounded-t-[40px] flex flex-col space-y-8 py-8 blenderBg",
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-row items-center justify-center space-x-2",
                                    children: [(0, n.jsx)("div", {
                                        className: "rounded-full cursor-pointer uppercase text-white text-xl font-semibold px-5 py-3 bg-gray-800 hover:bg-gray-800",
                                        onClick: () => a && window.open("".concat(y, "/address/").concat(a), "_blank", "noopener,noreferrer"),
                                        children: (0, n.jsxs)("p", {
                                            className: "text-sm",
                                            children: [" ", a ? "".concat(F(a)) : "Not connected"]
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "rounded-full cursor-pointer uppercase text-white text-xl font-semibold px-5 py-3 bg-gray-800 hover:bg-gray-800",
                                        onClick: () => t("stake"),
                                        children: (0, n.jsx)("p", {
                                            className: "text-sm",
                                            children: "Back to stake"
                                        })
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex justify-center flex-col items-center space-y-1",
                                    children: [(0, n.jsx)("p", {
                                        className: "opacity-50",
                                        children: "Available to stake"
                                    }), (0, n.jsx)("p", {
                                        className: "text-white text-4xl",
                                        children: "".concat(s, " Blockify")
                                    })]
                                })]
                            })
                        }), (0, n.jsxs)("div", {
                            className: "rounded-[40px] border border-solid border-gray-600 py-12 px-16 flex flex-col space-y-6",
                            children: [(0, n.jsx)("p", {
                                className: "text-enter text-white text-2xl",
                                children: "Reward History"
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col space-y-2",
                                children: [(null == d ? void 0 : d.length) === 0 && !1 === c && (0, n.jsx)("p", {
                                    className: "text-enter text-xl opacity-50",
                                    children: "No History!"
                                }), d && d.length > 0 && d.map((e, t) => (0, n.jsx)(eu, {
                                    item: e
                                }, t))]
                            }), d && (null == d ? void 0 : d.length) !== 0 && (0, n.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, n.jsx)("button", {
                                    className: "text-center rounded-full px-6 py-2 bg-gray-900 hover:opacity-75 text-white",
                                    onClick: () => {
                                        l(!0)
                                    },
                                    children: "Load more"
                                })
                            })]
                        })]
                    })
                },
                em = a(69322);
            let ex = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, n.jsxs)(em.fC, {
                    ref: t,
                    className: function () {
                        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                        return (0, X.m6)((0, z.clsx)(t))
                    }("relative flex w-full touch-none select-none items-center", a),
                    ...s,
                    children: [(0, n.jsx)(em.fQ, {
                        className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-white/20",
                        children: (0, n.jsx)(em.e6, {
                            className: "absolute h-full bg-white"
                        })
                    }), (0, n.jsx)(em.bU, {
                        className: "block h-4 w-4 rounded-full border border-white/50 bg-white cursor-pointer shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    })]
                })
            });
            ex.displayName = em.fC.displayName;
            var eh = e => {
                let {
                    setSelectedTab: t
                } = e, {
                    fixedStakeInfo: a,
                    walletAddress: s,
                    balance: r,
                    connectWallet: l,
                    handleUserFixedStakes: d,
                    logoutWallet: o
                } = Z(), [c, p] = (0, i.useState)("0"), [u, m] = (0, i.useState)(!1), [x, h] = (0, i.useState)(!1), [w, f] = (0, i.useState)(30), b = (0, i.useMemo)(() => I(w, a.minFixedDays, a.maxFixedDays, a.minFixedAPY, a.maxFixedAPY), [w]), g = (0, i.useMemo)(() => C(parseInt(b), parseFloat(c), w), [b, c, w]), j = async e => {
                    try {
                        await l(e)
                    } catch (e) {
                        (0, ea.yv)(e.message, {
                            variant: "error"
                        })
                    }
                }, v = async () => {
                    (0, ea.yv)("Staking is currently disabled. You can still unstake your tokens as usual", {
                        variant: "warning"
                    })
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [u && (0, n.jsx)(et, {
                        connectWallet: j,
                        setShowConnectWalletModal: m
                    }), (0, n.jsxs)(es.E.div, {
                        className: "rounded-[40px] border border-solid xl:space-y-8 space-y-4 md:w-[500px] border-gray-600 flex flex-col bg-gradient-to-r from-blue-900 to-blue-500 ml-2 mr-2",
                        initial: {
                            opacity: 0,
                            y: "-20%"
                        },
                        whileInView: {
                            opacity: 1,
                            y: "0"
                        },
                        transition: {
                            duration: .5,
                            delay: 0
                        },
                        viewport: {
                            once: !0
                        },
                        children: [(0, n.jsxs)("div", {
                            className: "pt-12",
                            children: [(0, n.jsxs)("div", {
                                className: "flex justify-center gap-4",
                                children: [(0, n.jsx)("div", {
                                    className: "rounded-full uppercase text-white text-xl font-semibold px-5 py-3 bg-gray-800 hover:bg-gray-800 ".concat(s && "cursor-pointer"),
                                    onClick: () => s && window.open("".concat(y, "/address/").concat(s), "_blank", "noopener,noreferrer"),
                                    children: (0, n.jsxs)("p", {
                                        className: "text-sm",
                                        children: [" ", s ? "".concat(F(s)) : "Not connected"]
                                    })
                                }), s && (0, n.jsx)("div", {
                                    className: "rounded-full cursor-pointer uppercase text-white text-xl font-semibold px-5 py-3 bg-gray-800 hover:bg-gray-800",
                                    onClick: () => t("history"),
                                    children: (0, n.jsx)("p", {
                                        className: "text-sm",
                                        children: "Reward History"
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex justify-center flex-col items-center space-y-1 mt-10",
                                children: [(0, n.jsx)("p", {
                                    className: "opacity-50",
                                    children: "Available to stake"
                                }), (0, n.jsx)("p", {
                                    className: "text-white text-4xl",
                                    children: r
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "rounded-[40px] border-t border-solid border-gray-600 p-12 flex flex-col bg-[#000000] space-y-4",
                            children: [(0, n.jsxs)("div", {
                                className: "bg-black rounded-b-[40px] flex flex-row items-start justify-between",
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-col space-y-1 text-left",
                                    children: [(0, n.jsx)("p", {
                                        className: "text-white opacity-50",
                                        children: "duration"
                                    }), (0, n.jsx)("p", {
                                        className: "text-white text-2xl",
                                        children: "Dynamic"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col space-y-1 items-center",
                                    children: [(0, n.jsx)("p", {
                                        className: "text-white opacity-50",
                                        children: "Blockify APR"
                                    }), (0, n.jsxs)("p", {
                                        className: "text-white text-2xl",
                                        children: ["~", b, "%"]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col space-y-1 items-end",
                                    children: [(0, n.jsx)("p", {
                                        className: "text-white opacity-50",
                                        children: "Reward Projection"
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-end items-end",
                                        children: [(0, n.jsxs)("p", {
                                            className: "text-[#6CFFCA] text-2xl",
                                            children: ["+", g]
                                        }), (0, n.jsx)("p", {
                                            className: "text-[#6CFFCA] text-sm pl-2",
                                            children: "BLOCKIFY"
                                        })]
                                    })]
                                })]
                            }), (0, n.jsx)(ex, {
                                defaultValue: [a.minFixedAPY],
                                max: a.maxFixedDays,
                                min: a.minFixedDays,
                                step: 1,
                                className: "pt-5",
                                onValueChange: e => f(e[0])
                            }), (0, n.jsxs)("div", {
                                className: "flex justify-between opacity-50",
                                children: [(0, n.jsx)("p", {
                                    className: "text-sm",
                                    children: "Dynamic"
                                }), (0, n.jsx)("p", {
                                    className: "text-sm",
                                    children: E(w)
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-row items-center space-x-6 justify-center pt-10",
                                children: [(0, n.jsx)("p", {
                                    className: "uppercase opacity-50 text-xl",
                                    children: "Stake BLOCKIFY"
                                }), (0, n.jsx)("div", {
                                    className: "rounded-full cursor-pointer uppercase text-white text-xl font-semibold px-5 py-3 bg-gray-900 hover:bg-gray-800",
                                    onClick: () => {
                                        p(r.toString())
                                    },
                                    children: "MAX"
                                })]
                            }), (0, n.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, n.jsx)("input", {
                                    type: "number",
                                    placeholder: "Amount",
                                    value: c,
                                    onChange: e => p(e.target.value),
                                    className: "text-white text-6xl placeholder:text-4xl text-center !bg-transparent outline-none !border-none md:max-w-sm w-full"
                                })
                            }), !s && (0, n.jsx)("button", {
                                className: "rounded-full py-4 bg-white text-black w-full text-center hover:opacity-75",
                                onClick: () => m(!0),
                                children: "Connect wallet"
                            }), s && (0, n.jsx)("button", {
                                disabled: x,
                                className: "rounded-full py-4 bg-white text-black w-full text-center hover:opacity-75",
                                onClick: v,
                                children: x ? (0, n.jsx)(el, {}) : "Stake now"
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-row justify-between items-start space-x-12",
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-col space-y-2 md:text-sm text-xs text-white opacity-60 text-left",
                                    children: [(0, n.jsx)("p", {
                                        children: "Your address"
                                    }), (0, n.jsx)("p", {
                                        children: "Staking Amount"
                                    }), (0, n.jsx)("p", {
                                        className: "pb-8",
                                        children: "Staking Reward"
                                    }), (0, n.jsx)("p", {
                                        children: "Total Balance"
                                    }), (0, n.jsx)("p", {
                                        children: "Average Return"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col space-y-2 md:text-sm text-xs text-white justify-end items-end",
                                    children: [(0, n.jsx)("p", {
                                        children: s ? "".concat(F(s)) : "Not connected"
                                    }), (0, n.jsxs)("p", {
                                        children: [c || "0", " BLOCKIFY"]
                                    }), (0, n.jsxs)("p", {
                                        className: "pb-8",
                                        children: [g, " BLOCKIFY"]
                                    }), (0, n.jsx)("p", {
                                        children: r
                                    }), (0, n.jsxs)("p", {
                                        className: "text-[#FADE4A]",
                                        children: [b, "%"]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            };
            let ew = e => {
                let {
                    selectedTab: t,
                    setSelectedTab: a
                } = e;
                return (0, n.jsxs)("div", {
                    className: "rounded-[50px] bg-[#24263A] border-1 border-solid flex p-2 flex-row items-center space-x-2",
                    children: [(0, n.jsx)("div", {
                        className: "rounded-[40px] justify-center flex flex-1 w-full cursor-pointer text-white text-center py-4 text-[14px] ".concat("stake" === t ? "bg-[#6C95C0] text-white hover:opacity-75" : "bg-gray-700 text-white", " "),
                        onClick: () => a("stake"),
                        children: "Stake"
                    }), (0, n.jsx)("div", {
                        className: 'rounded-[40px] flex flex-1 w-full justify-center cursor-pointer text-white text-center py-4 text-[14px] hover:opacity-75  selectedTab === "unstake"\n    '.concat("unstake" === t ? "bg-[#6C95C0] text-white hover:opacity-75" : "bg-gray-700 text-white hover:opacity-75", "\n}"),
                        onClick: () => a("unstake"),
                        children: "Unstake"
                    })]
                })
            };
            var ef = () => {
                    let [e, t] = (0, i.useState)("stake");
                    return (0, n.jsxs)("div", {
                        className: "md:pt-12 md:pb-16 pb-12 flex flex-col space-y-8 text-center",
                        children: [(0, n.jsxs)(es.E.div, {
                            initial: {
                                opacity: 0,
                                y: "-30%"
                            },
                            whileInView: {
                                opacity: 1,
                                y: "0"
                            },
                            transition: {
                                duration: 1,
                                delay: 0
                            },
                            viewport: {
                                once: !0
                            },
                            className: "text-white text-[44px] font-semibold",
                            children: [(0, n.jsx)("p", {
                                className: "text-3xl md:text-4xl lg:text-5xl mt-12 sm:mt-10 md:mt-8 lg:mt-3",
                                children: "history" === e ? "Reward History" : "Stake Your Blockify"
                            }), " "]
                        }), (0, n.jsx)(es.E.div, {
                            className: "text-[16px] text-[#85929F]",
                            initial: {
                                opacity: 0,
                                y: "-30%"
                            },
                            whileInView: {
                                opacity: 1,
                                y: "0"
                            },
                            transition: {
                                duration: 1,
                                delay: 0
                            },
                            viewport: {
                                once: !0
                            },
                            children: (0, n.jsx)("p", {
                                className: "text-sm md:text-xl lg:text-xl",
                                children: "history" === e ? "Track your Blendr staking rewards" : "Stake blockify and receive blockify tokens as rewards"
                            })
                        }), (0, n.jsx)(es.E.div, {
                            initial: {
                                opacity: 0,
                                y: "30%"
                            },
                            whileInView: {
                                opacity: 1,
                                y: "0"
                            },
                            transition: {
                                duration: 1,
                                delay: 0
                            },
                            viewport: {
                                once: !0
                            },
                            children: "history" !== e && (0, n.jsx)(ew, {
                                selectedTab: e,
                                setSelectedTab: t
                            })
                        }), "stake" === e && (0, n.jsx)(eh, {
                            setSelectedTab: t
                        }), "unstake" === e && (0, n.jsx)(eo, {}), "history" === e && (0, n.jsx)(ey, {
                            setSelectedTab: t
                        })]
                    })
                },
                eb = () => (0, n.jsxs)("div", {
                    className: "flex flex-col items-center h-auto min-h-screen w-full stake-bg text-white",
                    children: [(0, n.jsx)(ef, {}), (0, n.jsx)(ei, {})]
                });
            let eg = (0, J.u_)({
                metadata: {
                    name: "Blendr",
                    description: "Secure, scalable access to computing resources via blockchain for research and development.",
                    url: "https:/blendr.network/",
                    icons: ["https://staking.blendr.network/assets/img/logo-img.webp"]
                }
            });

            function ej(e) {
                let {
                    children: t
                } = e;
                return t
            }

            function ev() {
                return (0, n.jsx)($, {
                    children: (0, n.jsx)(ej, {
                        children: (0, n.jsx)(en, {
                            children: (0, n.jsx)(eb, {})
                        })
                    })
                })
            }(0, J.OY)({
                ethersConfig: eg,
                chains: [{
                    chainId: 1,
                    name: "Ethereum",
                    currency: "ETH",
                    explorerUrl: "https://etherscan.io",
                    rpcUrl: "https://mainnet.infura.io/v3/a0b74d65173042fabe9639289bd336b5"
                }],
                projectId: "5da5b2b58bd7a808360ab7d24b147909",
                enableAnalytics: !0,
                enableOnramp: !0
            })
        }
    },
    function (e) {
        e.O(0, [452, 280, 259, 858, 714, 971, 69, 744], function () {
            return e(e.s = 84173)
        }), _N_E = e.O()
    }
]);