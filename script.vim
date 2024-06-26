" Sets
set guicursor=
set termguicolors
set scrolloff=10
set number
set rnu
set tabstop=4 softtabstop=4
set shiftwidth=4
set expandtab
set smartindent

" Plugins
call plug#begin()
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'ajmwagar/vim-deus'
Plug 'ayu-theme/ayu-vim'
Plug 'mattn/emmet-vim'
Plug 'christophermca/meta5'
Plug 'andreasvc/vim-256noir'
Plug 'yorickpeterse/happy_hacking.vim'
Plug 'chase/focuspoint-vim'
Plug 'morhetz/gruvbox'
call plug#end()

" Color
let ayucolor = "dark" " mirage and light available too
colorscheme focuspoint 

" Remaps
let mapleader = " "
nnoremap <leader>rw :Vex<CR>
nnoremap <leader><tab> :so ~/.config/nvim/init.vim<CR>
nnoremap <leader>e :Ex<CR>
nnoremap <leader><CR> :w<CR>
inoremap <C-j> <esc>
nnoremap <leader>w <C-w>
nnoremap <leader><C-p> :GFiles<CR>
nnoremap <leader>f :files<cr>
nnoremap <C-j> :cnext<CR>
nnoremap <C-k> :cprev<CR>
autocmd filetype c,javascript inoremap { {<CR>}<esc>kA
autocmd filetype c,javascript inoremap } <right>
autocmd filetype c,javascript inoremap }} }
autocmd filetype c,javascript inoremap )) )
autocmd filetype c,javascript inoremap ]] ]
autocmd filetype c,javascript inoremap "" "
autocmd filetype c,javascript inoremap '' '
autocmd filetype c,javascript inoremap ( ()<left>
autocmd filetype c,javascript inoremap ) <right>
autocmd filetype c,javascript inoremap [ []<left>
autocmd filetype c,javascript inoremap " ""<left>
autocmd filetype c,javascript inoremap ' ''<left>
autocmd filetype c,javascript inoremap ] <right>
