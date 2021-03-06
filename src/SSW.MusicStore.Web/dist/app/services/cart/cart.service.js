System.register(['angular2/http', 'angular2/core', '../../config', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, config_1;
    var CartService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (_1) {}],
        execute: function() {
            //import {Observable} from 'rxjs';
            CartService = (function () {
                function CartService(_http) {
                    this._http = _http;
                }
                CartService.prototype.postCartItems = function (album) {
                    return this._http.post(config_1.API_BASE + ("/cart/" + album.albumId), JSON.stringify(album.albumId))
                        .map(function (response) { return response.json(); });
                };
                CartService.prototype.getCartItems = function () {
                    return this._http.get(config_1.API_BASE + "/cart")
                        .map(function (response) { return response.json(); });
                };
                CartService.prototype.removeItem = function (item) {
                    return this._http.delete(config_1.API_BASE + ("/cart/" + item.cartItemId), item.cartItemId)
                        .map(function (response) { return response.json(); });
                };
                CartService.prototype.addCartItem = function (album) {
                    return this._http.post(config_1.API_BASE + ("/cart/" + album.albumId), JSON.stringify(album.albumId))
                        .map(function (response) { return response.json(); });
                };
                CartService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CartService);
                return CartService;
            })();
            exports_1("CartService", CartService);
        }
    }
});
