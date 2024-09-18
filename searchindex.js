Search.setIndex({"docnames": ["Electrostatics", "MovingCharges", "content", "intro", "markdown", "markdown-notebooks", "notebooks"], "filenames": ["Electrostatics.ipynb", "MovingCharges.ipynb", "content.md", "intro.md", "markdown.md", "markdown-notebooks.md", "notebooks.ipynb"], "titles": ["Electrostatics", "Electrodynamics", "Content in Jupyter Book", "Welcome to your Jupyter Book", "Markdown Files", "Notebooks with MyST Markdown", "Content with notebooks"], "terms": {"author": [0, 1], "date": [0, 1], "time": 0, "spent": [0, 1], "thi": [0, 1, 2, 3, 4, 5, 6], "assign": [0, 1], "note": [0, 4], "you": [0, 1, 3, 4, 5, 6], "must": [0, 4], "answer": [0, 1], "thing": [0, 1, 5], "insid": [0, 1], "tag": 0, "well": [0, 1, 3, 6], "question": 0, "which": [0, 1, 5], "have": [0, 1, 5], "an": [0, 4], "import": [0, 1, 6], "numpi": [0, 1, 6], "np": [0, 1, 6], "matplotlib": [0, 1, 6], "pyplot": [0, 1, 6], "plt": [0, 1, 6], "math": [0, 1, 6], "jax": [0, 1], "config": [0, 1], "updat": [0, 1], "jax_enable_x64": 0, "true": [0, 1], "jit": [0, 1], "grad": [0, 1], "jnp": [0, 1], "anim": [0, 1], "ipython": [0, 1], "displai": [0, 1, 5], "html": [0, 1, 6], "def": [0, 1], "resetm": [0, 1], "keeplist": [0, 1], "ll": [0, 1, 4], "who_l": [0, 1], "animateme_singlependula": 0, "iiii": [0, 1], "remov": [0, 1], "jjjj": [0, 1], "reset_select": [0, 1], "f": [0, 1], "rcparam": [0, 1, 6], "font": [0, 1], "size": [0, 1], "14": [0, 1], "return": [0, 1], "datetim": [0, 1], "now": [0, 1], "2024": 0, "9": 0, "18": 0, "15": [0, 1], "21": [0, 1], "41": 0, "612005": 0, "In": [0, 1], "project": 0, "we": [0, 1], "ar": [0, 1, 2, 4, 5], "go": [0, 1, 3], "explor": 0, "potenti": 0, "list": [0, 1], "collabor": 0, "refer": [0, 4], "us": [0, 1, 4, 5], "develop": [0, 1], "your": [0, 1, 4, 5, 6], "code": [0, 1, 5], "section": [0, 2], "start": [0, 1, 4, 5], "electr": 0, "field": 0, "gener": 0, "distribut": 0, "point": 0, "mani": [0, 1, 2, 4, 5], "case": [0, 1], "abl": [0, 1], "work": [0, 1, 6], "analyt": 0, "can": [0, 1, 4, 5, 6], "verifi": [0, 1], "some": [0, 1, 3, 4, 6], "limit": 0, "let": [0, 1, 5], "write": [0, 1, 2, 4, 5], "function": [0, 1, 4], "e": [0, 1], "q": [0, 1], "r": [0, 1], "posit": [0, 1], "where": [0, 1], "locat": [0, 1], "arrai": [0, 1, 6], "x": [0, 1], "y": [0, 1], "z": [0, 1], "two": [0, 1, 4, 5], "dimension": 0, "p": [0, 1], "3": 0, "three": [0, 1], "want": [0, 1, 6], "report": 0, "should": [0, 1, 5], "vector": 0, "here": [0, 1, 4, 6], "our": [0, 1], "goal": 0, "plot": [0, 1, 6], "variou": 0, "differ": [0, 1, 4], "singl": [0, 1], "origin": [0, 1], "It": [0, 1, 3, 4], "s": [0, 1, 4, 5, 6], "littl": [0, 1], "bit": [0, 1], "difficult": 0, "dimens": 0, "so": [0, 1, 2, 5], "instead": [0, 1], "slice": [0, 1], "evalu": [0, 1], "neg": [0, 1], "valu": [0, 1], "0": [0, 1, 6], "squar": 0, "5": [0, 1, 6], "leq": 0, "sai": [0, 1], "do": [0, 1, 2, 4, 6], "resolut": [0, 1], "100x100": 0, "easi": [0, 1], "wai": [0, 1, 2], "get": [0, 1, 4, 5], "need": [0, 1, 5], "input": [0, 4], "follow": [0, 1, 4, 5], "The": [0, 4, 5], "below": 0, "100": [0, 6], "numpoint": [0, 1], "xs": [0, 1], "linspac": [0, 1, 6], "ys": [0, 1], "meshgrid": [0, 1], "zero": [0, 1], "vstack": [0, 1], "flatten": [0, 1], "t": [0, 1, 6], "output": [0, 1, 5], "onc": [0, 1], "onli": 0, "look": [0, 1], "xy": 0, "plane": 0, "line": [0, 1, 4, 5, 6], "ignor": [0, 1], "hat": 0, "direct": [0, 1, 5], "e_x": [0, 1], "reshap": [0, 1], "e_i": [0, 1], "e_z": [0, 1], "streamplot": [0, 1], "linewidth": [0, 1], "cmap": [0, 1, 6], "cm": [0, 6], "inferno": 0, "densiti": [0, 1], "arrowstyl": [0, 1], "arrows": [0, 1], "colorbar": [0, 1], "sometim": 0, "interest": [0, 1], "also": [0, 1, 4, 5, 6], "repres": 0, "total": 0, "magnitud": [0, 1], "includ": [0, 5, 6], "color": [0, 1, 6], "emag": 0, "paramet": 0, "addit": [0, 1], "would": 0, "like": [0, 1, 4, 5], "distanc": 0, "expect": 0, "decai": 0, "give": [0, 1, 3], "set": [0, 1], "4": [0, 5, 6], "make": [0, 6], "versu": 0, "log": [0, 1], "linear": [0, 1], "fit": 0, "polyfit": 0, "xx": 0, "yy": 0, "slope": [0, 1], "corresopnd": 0, "essenti": [0, 1], "same": [0, 1, 4], "did": [0, 1], "part": 0, "consist": 0, "opposit": 0, "apart": 0, "show": [0, 1, 3, 4, 5], "larg": 0, "propto": 0, "i": [0, 1], "plote": 0, "50": [0, 1], "after": [0, 1], "30": 0, "quadropol": 0, "pleas": 0, "problem": [0, 1], "radiu": [0, 1], "xz": 0, "just": [0, 1, 4], "explain": 0, "why": 0, "all": [0, 1, 4, 5], "central": 0, "axi": 0, "goe": 0, "qz": 0, "understand": [0, 5], "role": 0, "scipi": 1, "patch": 1, "mcl": 1, "warn": 1, "from": [1, 6], "functool": 1, "partial": 1, "epsilon0": 1, "filterwarn": 1, "messag": 1, "rm": 1, "categori": 1, "runtimewarn": 1, "fail": 1, "converg": 1, "8": 1, "854187817e": 1, "12": 1, "3e8": 1, "6e": 1, "19": 1, "modulenotfounderror": 1, "traceback": 1, "most": [1, 4], "recent": 1, "call": [1, 4], "last": 1, "cell": 1, "No": 1, "modul": 1, "name": 1, "plotscalarfield": 1, "l": 1, "assert": 1, "ndim": 1, "length": 1, "len": 1, "side_length": 1, "int": 1, "sqrt": 1, "field_2d": 1, "imshow": 1, "extent": 1, "hsv": 1, "plotfield": 1, "shape": 1, "e_strength": 1, "fig": [1, 6], "ax": [1, 6], "subplot": [1, 6], "plotslicei": 1, "marker": 1, "none": 1, "linestyl": 1, "loc": 1, "plotslicex": 1, "plotpath": 1, "ts": 1, "1e": 1, "1000": 1, "figsiz": [1, 6], "set_titl": 1, "label": 1, "set_xlabel": 1, "set_ylabel": 1, "legend": [1, 6], "lower": 1, "right": 1, "grid": 1, "ax1": 1, "v_x": 1, "v_y": 1, "ax2": 1, "adjust": 1, "layout": 1, "tight_layout": 1, "getposit": 1, "gridpoint": 1, "class": 1, "optmeclass": 1, "__init__": 1, "self": 1, "cost": 1, "numposit": 1, "initial_guess": 1, "guess": 1, "ones": 1, "els": 1, "optim": 1, "t0": 1, "maxit": 1, "tr": 1, "newton": 1, "arg": 1, "tol": 1, "23": 1, "ab": 1, "print": [1, 5], "number": 1, "sum": 1, "averag": 1, "copi": 1, "down": 1, "move": 1, "These": 1, "up": 1, "experi": 1, "varieti": 1, "next": 1, "produc": 1, "result": 1, "done": 1, "allow": [1, 4], "ani": [1, 3, 5], "more": [1, 3, 5, 6], "exampl": [1, 4, 6], "orbit": 1, "sourc": 1, "who": 1, "v": 1, "phi": 1, "frac": 1, "pi": 1, "epsilon_0": 1, "left": 1, "cdot": 1, "vt_": 1, "throughout": 1, "k": 1, "relev": 1, "variabl": 1, "store": [1, 4], "exactpotenti": 1, "9c": 1, "For": [1, 4, 6], "alwai": 1, "si": 1, "unit": 1, "mai": 1, "find": 1, "a_x": 1, "a_i": 1, "a_z": 1, "send": 1, "typic": 1, "window": 1, "begin": [1, 6], "align": [1, 6], "end": [1, 6], "ve": 1, "given": 1, "both": [1, 4], "To": 1, "help": [1, 4], "out": [1, 3, 6], "abov": 1, "2l": 1, "through": 1, "There": [1, 2, 6], "analog": 1, "each": 1, "logarithm": 1, "choos": 1, "08": 1, "respect": 1, "curv": 1, "compar": 1, "against": 1, "later": 1, "vt": 1, "implement": 1, "comput": 1, "again": 1, "albeit": 1, "harder": 1, "approach": 1, "li\u00e9nard": 1, "wiechert": 1, "n": [1, 6], "beta_": 1, "r_": 1, "_": 1, "t_r": 1, "v_": 1, "n_": 1, "notat": 1, "indic": 1, "anyth": 1, "parenthesi": 1, "ha": 1, "what": 1, "tell": 1, "almost": 1, "coulomb": 1, "law": 1, "know": 1, "love": 1, "assum": 1, "speed": 1, "light": 1, "devlop": 1, "simplest": 1, "befor": 1, "turn": 1, "attent": 1, "space": 1, "electron": 1, "element": 1, "assignmet": 1, "As": [1, 6], "exerces": 1, "sure": [1, 6], "correct": 1, "vs": 1, "10": [1, 6], "7": 1, "someth": 1, "xlabel": 1, "come": 1, "depend": [1, 4], "current": 1, "wa": 1, "past": 1, "particular": [1, 3], "could": 1, "reach": 1, "accomplish": 1, "figur": 1, "target": 1, "t_0": 1, "henc": 1, "affect": 1, "somewhat": 1, "non": 1, "trivial": 1, "becaus": 1, "equal": 1, "other": [1, 5], "word": 1, "had": 1, "notic": 1, "equat": 1, "h": 1, "while": 1, "might": 1, "solv": 1, "won": 1, "search": 1, "satisfi": 1, "instantan": 1, "otherwis": 1, "quantifi": 1, "how": [1, 2, 3, 5], "far": 1, "awai": 1, "thei": [1, 4], "satisifi": 1, "Then": 1, "minim": 1, "If": [1, 5], "everi": 1, "found": 1, "raphson": 1, "wrap": 1, "opt": 1, "initi": 1, "maximum": 1, "iter": 1, "re": 1, "ask": 1, "bad": 1, "pa": 1, "raphsodi": 1, "plai": 1, "try": 1, "reason": 1, "tune": 1, "good": 1, "run": [1, 5], "rel": 1, "tini": 1, "e16": 1, "graph": 1, "about": [1, 4, 5, 6], "requir": 1, "That": [1, 5], "further": 1, "therefor": 1, "longer": 1, "sinc": 1, "separ": 1, "correspond": 1, "20": 1, "shown": 1, "solid": 1, "dot": 1, "connect": 1, "yellow": 1, "visual": 1, "astyp": 1, "xcheck": 1, "random": [1, 6], "randint": 1, "ycheck": 1, "thecolor": 1, "base_color": 1, "kei": 1, "tableau_color": 1, "w": 1, "rang": [1, 6], "rect": 1, "rectangl": 1, "edgecolor": 1, "facecolor": 1, "alpha": 1, "gca": 1, "add_patch": 1, "xi": 1, "yi": 1, "fieldposit": 1, "sourceposit": 1, "dist": 1, "linalg": 1, "norm": 1, "markers": 1, "o": 1, "fillstyl": 1, "along": 1, "rememb": 1, "getpotenti": 1, "check": [1, 3, 6], "nabla": 1, "deriv": 1, "term": 1, "finit": 1, "delta": 1, "fraction": 1, "therebi": 1, "six": 1, "13": 1, "getfield": 1, "exact": 1, "coupl": 1, "contract": 1, "special": [1, 4], "despit": 1, "put": 1, "amazingli": 1, "form": 1, "eman": 1, "realli": 1, "pretti": 1, "crazi": 1, "amaz": 1, "calcul": 1, "previou": 1, "consid": 1, "whose": 1, "earlier": 1, "between": 1, "worth": 1, "ad": 1, "circl": 1, "see": [1, 3, 4, 5, 6], "instruct": [1, 5], "cool": 1, "strength": 1, "ahead": 1, "back": 1, "forth": 1, "co": 1, "better": 1, "seprat": 1, "nicer": 1, "my": 1, "final": 1, "sign": [1, 6], "pass": 1, "defin": [1, 5], "ra": 1, "rb": 1, "va": 1, "vb": 1, "quantiti": 1, "actual": 1, "chang": 1, "add": 1, "don": 1, "twice": 1, "opta": 1, "optb": 1, "them": 1, "its": 1, "own": 1, "pai": 1, "subtract": 1, "made": 1, "modif": 1, "rest": [1, 5], "short": 2, "cover": 2, "few": [2, 3], "tip": 2, "small": [3, 4], "sampl": [3, 6], "feel": 3, "content": [3, 4, 5], "structur": [3, 4], "off": [3, 4, 5], "major": 3, "file": [3, 5], "type": 3, "doe": 3, "depth": 3, "topic": 3, "document": [3, 4, 5, 6], "inform": [3, 5, 6], "page": [3, 4, 5], "bundl": 3, "electrostat": 3, "electrodynam": 3, "whether": 4, "book": [4, 5, 6], "jupyt": [4, 5, 6], "notebook": 4, "ipynb": 4, "regular": 4, "md": [4, 5], "flavor": 4, "simpl": 4, "syntax": 4, "stand": 4, "markedli": 4, "text": [4, 5], "slight": 4, "variat": 4, "commonmark": 4, "extens": 4, "sphinx": 4, "ecosystem": 4, "overview": 4, "power": 4, "tool": 4, "kind": 4, "written": [4, 5], "markup": 4, "languag": 4, "serv": 4, "similar": 4, "purpos": 4, "one": 4, "wherea": 4, "span": 4, "accept": 4, "those": 4, "specif": 4, "being": 4, "render": 4, "box": 4, "when": [4, 5], "build": 4, "inlin": 4, "cite": 4, "bibtex": 4, "holdgraf_evidence_2014": 4, "moreov": 4, "insert": 4, "bibliographi": 4, "properli": 4, "bib": 4, "starter": 4, "lot": [4, 6], "jupyterbook": 4, "org": 4, "base": 5, "detail": 5, "With": 5, "2": 5, "built": 5, "block": 5, "execut": 5, "default": 5, "kernel": 5, "jupytext": 5, "convert": 5, "support": 5, "top": 5, "presenc": 5, "d": 5, "treat": 5, "command": 5, "init": 5, "path": 5, "markdownfil": 5, "creat": 6, "mean": 6, "emb": 6, "imag": 6, "etc": 6, "post": 6, "add_": 6, "mbox": 6, "la_": 6, "tex": 6, "But": 6, "escap": 6, "dollar": 6, "keep": 6, "guid": 6, "cycler": 6, "ion": 6, "contextlib": 6, "exitstack": 6, "0x7fe314c1c730": 6, "fix": 6, "state": 6, "reproduc": 6, "seed": 6, "19680801": 6, "data": 6, "logspac": 6, "1": 6, "randn": 6, "ii": 6, "coolwarm": 6, "prop_cycl": 6, "line2d": 6, "custom_lin": 6, "lw": 6, "cold": 6, "medium": 6, "hot": 6, "interact": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"electrostat": 0, "exercis": [0, 1], "1": [0, 1], "from": 0, "static": 0, "charg": [0, 1], "A": [0, 1], "monopol": [0, 1], "b": [0, 1], "dipol": [0, 1], "c": [0, 1], "quadrapol": 0, "d": [0, 1], "ring": [0, 1], "2": [0, 1], "conductor": 0, "electrodynam": 1, "analyt": 1, "solut": 1, "point": 1, "constant": 1, "veloc": 1, "The": 1, "scalar": 1, "potenti": 1, "electr": 1, "field": 1, "take": 1, "path": 1, "retard": 1, "time": 1, "vector": 1, "particl": 1, "gener": 1, "3": 1, "antannea": 1, "one": 1, "dimension": 1, "oscil": 1, "4": 1, "an": [1, 5], "make": 1, "content": [2, 6], "jupyt": [2, 3], "book": [2, 3], "welcom": 3, "your": 3, "markdown": [4, 5, 6], "file": 4, "what": 4, "myst": [4, 5, 6], "sampl": 4, "role": 4, "direct": 4, "citat": 4, "learn": 4, "more": 4, "notebook": [5, 6], "exampl": 5, "cell": 5, "creat": 5, "quickli": 5, "add": 5, "yaml": 5, "metadata": 5, "code": 6, "block": 6, "output": 6}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})