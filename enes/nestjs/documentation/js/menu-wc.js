'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-a6123ff9b99c989631e3e3838f3f8939f84b5b283ec0d6c01b46311d32961f76c9c2945f0d108fdac5dba7bb957033205183ace7ef0b9c771a5f0c1829a554e4"' : 'data-target="#xs-controllers-links-module-AppModule-a6123ff9b99c989631e3e3838f3f8939f84b5b283ec0d6c01b46311d32961f76c9c2945f0d108fdac5dba7bb957033205183ace7ef0b9c771a5f0c1829a554e4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a6123ff9b99c989631e3e3838f3f8939f84b5b283ec0d6c01b46311d32961f76c9c2945f0d108fdac5dba7bb957033205183ace7ef0b9c771a5f0c1829a554e4"' :
                                            'id="xs-controllers-links-module-AppModule-a6123ff9b99c989631e3e3838f3f8939f84b5b283ec0d6c01b46311d32961f76c9c2945f0d108fdac5dba7bb957033205183ace7ef0b9c771a5f0c1829a554e4"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-a6123ff9b99c989631e3e3838f3f8939f84b5b283ec0d6c01b46311d32961f76c9c2945f0d108fdac5dba7bb957033205183ace7ef0b9c771a5f0c1829a554e4"' : 'data-target="#xs-injectables-links-module-AppModule-a6123ff9b99c989631e3e3838f3f8939f84b5b283ec0d6c01b46311d32961f76c9c2945f0d108fdac5dba7bb957033205183ace7ef0b9c771a5f0c1829a554e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a6123ff9b99c989631e3e3838f3f8939f84b5b283ec0d6c01b46311d32961f76c9c2945f0d108fdac5dba7bb957033205183ace7ef0b9c771a5f0c1829a554e4"' :
                                        'id="xs-injectables-links-module-AppModule-a6123ff9b99c989631e3e3838f3f8939f84b5b283ec0d6c01b46311d32961f76c9c2945f0d108fdac5dba7bb957033205183ace7ef0b9c771a5f0c1829a554e4"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-be0ead1bfcae3744aae9919cbdfd40f39d5d2e8120660681c5ed6f42fbc9e4ff062bdc43ec041c9de21efef6243d75cf96345d6a5aebd2a7ed4382f842d925b3"' : 'data-target="#xs-controllers-links-module-AuthModule-be0ead1bfcae3744aae9919cbdfd40f39d5d2e8120660681c5ed6f42fbc9e4ff062bdc43ec041c9de21efef6243d75cf96345d6a5aebd2a7ed4382f842d925b3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-be0ead1bfcae3744aae9919cbdfd40f39d5d2e8120660681c5ed6f42fbc9e4ff062bdc43ec041c9de21efef6243d75cf96345d6a5aebd2a7ed4382f842d925b3"' :
                                            'id="xs-controllers-links-module-AuthModule-be0ead1bfcae3744aae9919cbdfd40f39d5d2e8120660681c5ed6f42fbc9e4ff062bdc43ec041c9de21efef6243d75cf96345d6a5aebd2a7ed4382f842d925b3"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-be0ead1bfcae3744aae9919cbdfd40f39d5d2e8120660681c5ed6f42fbc9e4ff062bdc43ec041c9de21efef6243d75cf96345d6a5aebd2a7ed4382f842d925b3"' : 'data-target="#xs-injectables-links-module-AuthModule-be0ead1bfcae3744aae9919cbdfd40f39d5d2e8120660681c5ed6f42fbc9e4ff062bdc43ec041c9de21efef6243d75cf96345d6a5aebd2a7ed4382f842d925b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-be0ead1bfcae3744aae9919cbdfd40f39d5d2e8120660681c5ed6f42fbc9e4ff062bdc43ec041c9de21efef6243d75cf96345d6a5aebd2a7ed4382f842d925b3"' :
                                        'id="xs-injectables-links-module-AuthModule-be0ead1bfcae3744aae9919cbdfd40f39d5d2e8120660681c5ed6f42fbc9e4ff062bdc43ec041c9de21efef6243d75cf96345d6a5aebd2a7ed4382f842d925b3"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatsModule.html" data-type="entity-link" >CatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CatsModule-3f49cf5b26d2d882023a50a65e1f14124da8200079b97ee7ab88e068f92dbb02067e2968cace2d4842338c60ca81ffee7af2e5d9d670a3e796aa422c438580e9"' : 'data-target="#xs-controllers-links-module-CatsModule-3f49cf5b26d2d882023a50a65e1f14124da8200079b97ee7ab88e068f92dbb02067e2968cace2d4842338c60ca81ffee7af2e5d9d670a3e796aa422c438580e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CatsModule-3f49cf5b26d2d882023a50a65e1f14124da8200079b97ee7ab88e068f92dbb02067e2968cace2d4842338c60ca81ffee7af2e5d9d670a3e796aa422c438580e9"' :
                                            'id="xs-controllers-links-module-CatsModule-3f49cf5b26d2d882023a50a65e1f14124da8200079b97ee7ab88e068f92dbb02067e2968cace2d4842338c60ca81ffee7af2e5d9d670a3e796aa422c438580e9"' }>
                                            <li class="link">
                                                <a href="controllers/CatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CatsModule-3f49cf5b26d2d882023a50a65e1f14124da8200079b97ee7ab88e068f92dbb02067e2968cace2d4842338c60ca81ffee7af2e5d9d670a3e796aa422c438580e9"' : 'data-target="#xs-injectables-links-module-CatsModule-3f49cf5b26d2d882023a50a65e1f14124da8200079b97ee7ab88e068f92dbb02067e2968cace2d4842338c60ca81ffee7af2e5d9d670a3e796aa422c438580e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CatsModule-3f49cf5b26d2d882023a50a65e1f14124da8200079b97ee7ab88e068f92dbb02067e2968cace2d4842338c60ca81ffee7af2e5d9d670a3e796aa422c438580e9"' :
                                        'id="xs-injectables-links-module-CatsModule-3f49cf5b26d2d882023a50a65e1f14124da8200079b97ee7ab88e068f92dbb02067e2968cace2d4842338c60ca81ffee7af2e5d9d670a3e796aa422c438580e9"' }>
                                        <li class="link">
                                            <a href="injectables/CatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-b8a1ea03cf12323f19d2789cc368ea99876bedbc9cde892c9ce5c6756f3624b01539c514d6f4d0207f77ef4783dc4e1c8b036d31cc60f236dcf9a4e8736e196c"' : 'data-target="#xs-controllers-links-module-UsersModule-b8a1ea03cf12323f19d2789cc368ea99876bedbc9cde892c9ce5c6756f3624b01539c514d6f4d0207f77ef4783dc4e1c8b036d31cc60f236dcf9a4e8736e196c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-b8a1ea03cf12323f19d2789cc368ea99876bedbc9cde892c9ce5c6756f3624b01539c514d6f4d0207f77ef4783dc4e1c8b036d31cc60f236dcf9a4e8736e196c"' :
                                            'id="xs-controllers-links-module-UsersModule-b8a1ea03cf12323f19d2789cc368ea99876bedbc9cde892c9ce5c6756f3624b01539c514d6f4d0207f77ef4783dc4e1c8b036d31cc60f236dcf9a4e8736e196c"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-b8a1ea03cf12323f19d2789cc368ea99876bedbc9cde892c9ce5c6756f3624b01539c514d6f4d0207f77ef4783dc4e1c8b036d31cc60f236dcf9a4e8736e196c"' : 'data-target="#xs-injectables-links-module-UsersModule-b8a1ea03cf12323f19d2789cc368ea99876bedbc9cde892c9ce5c6756f3624b01539c514d6f4d0207f77ef4783dc4e1c8b036d31cc60f236dcf9a4e8736e196c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-b8a1ea03cf12323f19d2789cc368ea99876bedbc9cde892c9ce5c6756f3624b01539c514d6f4d0207f77ef4783dc4e1c8b036d31cc60f236dcf9a4e8736e196c"' :
                                        'id="xs-injectables-links-module-UsersModule-b8a1ea03cf12323f19d2789cc368ea99876bedbc9cde892c9ce5c6756f3624b01539c514d6f4d0207f77ef4783dc4e1c8b036d31cc60f236dcf9a4e8736e196c"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Cat.html" data-type="entity-link" >Cat</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ChangePwDto.html" data-type="entity-link" >ChangePwDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCatDto.html" data-type="entity-link" >CreateCatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCatDto-1.html" data-type="entity-link" >CreateCatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthMiddleware.html" data-type="entity-link" >AuthMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cat.html" data-type="entity-link" >Cat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});