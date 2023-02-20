# edit hugo blog content/* files
ert () {
  FILE="content/$1.org"
  if [[ -f "$FILE" ]]; then
    emacs -nw content/"$1".org
  else
    emacs -nw content/"$1".md
  fi
}
