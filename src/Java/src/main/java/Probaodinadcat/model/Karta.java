package Probaodinadcat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probaodinadcat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Карта
 */
@Entity(name = "IISProbaodinadcatКарта")
@Table(schema = "public", name = "Карта")
public class Karta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКарты")
    private Integer кодкарты;

    @Column(name = "ТипКарты")
    private String типкарты;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Komnata")
    @Convert("Komnata")
    @Column(name = "Комната", length = 16, unique = true, nullable = false)
    private UUID _komnataid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Komnata", insertable = false, updatable = false)
    private Komnata komnata;


    public Karta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКарты() {
      return кодкарты;
    }

    public void setКодКарты(Integer кодкарты) {
      this.кодкарты = кодкарты;
    }

    public String getТипКарты() {
      return типкарты;
    }

    public void setТипКарты(String типкарты) {
      this.типкарты = типкарты;
    }


}