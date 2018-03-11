"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Document = /** @class */ (function () {
    function Document() {
        this.diagrams = [];
    }
    return Document;
}());
exports.Document = Document;
var Diagram = /** @class */ (function () {
    function Diagram() {
        this.items = [];
    }
    Diagram.prototype.addParticipant = function (participant) {
        if (!participant || !participant.id) {
            return participant;
        }
        if (!this.participants) {
            participant.index = 0;
            this.participants = {};
            this.participants[participant.id] = participant;
            return participant;
        }
        participant.index = Object.keys(this.participants).length;
        var existing = this.participants[participant.id];
        if (existing) {
            existing.merge(participant);
            return existing;
        }
        this.participants[participant.id] = participant;
        return participant;
    };
    return Diagram;
}());
exports.Diagram = Diagram;
var DiagramItem = /** @class */ (function () {
    function DiagramItem(type) {
        this.type = type;
    }
    return DiagramItem;
}());
exports.DiagramItem = DiagramItem;
var Note = /** @class */ (function (_super) {
    __extends(Note, _super);
    function Note() {
        var _this = _super.call(this, "note") || this;
        _this.location = "Left";
        return _this;
    }
    return Note;
}(DiagramItem));
exports.Note = Note;
var SequenceMessage = /** @class */ (function (_super) {
    __extends(SequenceMessage, _super);
    function SequenceMessage() {
        return _super.call(this, "sequence_message") || this;
    }
    return SequenceMessage;
}(DiagramItem));
exports.SequenceMessage = SequenceMessage;
var Connector = /** @class */ (function (_super) {
    __extends(Connector, _super);
    function Connector() {
        var _this = _super.call(this, "connector") || this;
        _this.style = "solid";
        return _this;
    }
    return Connector;
}(DiagramItem));
exports.Connector = Connector;
var Participant = /** @class */ (function (_super) {
    __extends(Participant, _super);
    function Participant(index, id) {
        var _this = _super.call(this, "participant") || this;
        _this.index = index;
        _this.id = id;
        return _this;
    }
    Participant.prototype.merge = function (other) {
        if (other) {
            if (!this.style && other.style) {
                this.style = other.style;
            }
            if (!this.color && other.color) {
                this.color = other.color;
            }
            if (!this.title && other.title) {
                this.title = other.title;
            }
        }
        return this;
    };
    return Participant;
}(DiagramItem));
exports.Participant = Participant;
//# sourceMappingURL=document.js.map