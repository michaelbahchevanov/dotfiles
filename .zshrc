if [ -e $HOME/.aliases ]; then
    source $HOME/.aliases
fi

export ZSH="/Users/michaelb/.oh-my-zsh"
export PATH="$HOME/.local/bin:$PATH"
ZSH_THEME="pastelbasic"

plugins=(
    git 
    zsh-autosuggestions
    poetry)
source $ZSH/oh-my-zsh.sh

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/michaelb/mambaforge/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/michaelb/mambaforge/etc/profile.d/conda.sh" ]; then
        . "/Users/michaelb/mambaforge/etc/profile.d/conda.sh"
    else
        export PATH="/Users/michaelb/mambaforge/bin:$PATH"
    fi
fi
unset __conda_setup

if [ -f "/Users/michaelb/mambaforge/etc/profile.d/mamba.sh" ]; then
    . "/Users/michaelb/mambaforge/etc/profile.d/mamba.sh"
fi
# <<< conda initialize <<<

export PATH=$PATH:/Users/michaelb/.spicetify
export MODULAR_HOME="/Users/michaelb/.modular"
export PATH="/Users/michaelb/.modular/pkg/packages.modular.com_mojo/bin:$PATH"
eval "$(/opt/homebrew/bin/brew shellenv)"
eval "$(starship init zsh)"