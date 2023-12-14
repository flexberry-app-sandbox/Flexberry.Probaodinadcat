package Probaodinadcat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probaodinadcat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Должности
 */
@Entity(name = "IISProbaodinadcatДолжности")
@Table(schema = "public", name = "Должности")
public class Dolzhnosti {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодДолжности")
    private Integer коддолжности;

    @Column(name = "Должность")
    private String должность;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Karta")
    @Convert("Karta")
    @Column(name = "Карта", length = 16, unique = true, nullable = false)
    private UUID _kartaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Karta", insertable = false, updatable = false)
    private Karta karta;


    public Dolzhnosti() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодДолжности() {
      return коддолжности;
    }

    public void setКодДолжности(Integer коддолжности) {
      this.коддолжности = коддолжности;
    }

    public String getДолжность() {
      return должность;
    }

    public void setДолжность(String должность) {
      this.должность = должность;
    }


}